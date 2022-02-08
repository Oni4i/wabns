<?php
declare(strict_types = 1);

namespace App\Controller\API;

use App\DTO\Request\TrackRequestDTO;
use App\Entity\Track;
use App\Form\TrackFormType;
use App\Service\API\TrackRequestService;
use App\Service\API\TrackResponseService;
use App\Service\TrackService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/track")
 */
class TrackController extends AbsractAPIController
{
    private TrackService         $trackService;
    private TrackRequestService  $requestService;
    private TrackResponseService $responseService;

    public function __construct(
        TrackService $trackService,
        TrackRequestService $requestService,
        TrackResponseService $responseService
    )
    {
        $this->trackService = $trackService;
        $this->requestService = $requestService;
        $this->responseService = $responseService;
    }

    /**
     * @Route("/", methods={"GET"})
     */
    public function index(): JsonResponse
    {
        $tracks = $this->trackService->findAll();

        $DTOs = [];

        foreach ($tracks as $track) {
            $DTOs[] = $this->responseService->getDTOFromEntity($track);
        }

        return $this->createSuccessResponse($DTOs);
    }

    /**
     * @Route("/{id}", methods={"GET"})
     */
    public function show(?Track $track): JsonResponse
    {
        if (!$track) {
            return $this->createNotFoundErrorResponse('Отслеживание не существует');
        }

        return $this->createSuccessResponse($this->responseService->getDTOFromEntity($track));
    }

    /**
     * @Route("/add", methods={"POST"})
     */
    public function add(Request $request): JsonResponse
    {
        $form = $this->createForm(TrackFormType::class, new TrackRequestDTO());

        $form->submit($request->query->all());

        if ($form->isValid()) {
            $track = $this->requestService->getEntityFromDTO($form->getData());
            $this->trackService->save($track);

            return $this->createSuccessResponse('Отслеживание создано успешно');
        }

        return $this->createErrorResponseWithFields(
            'При создании отслеживания произошла ошибка',
            $this->getFormErrors($form)
        );
    }

    /**
     * @Route("/remove/{id}", methods={"DELETE", "OPTIONS"})
     */
    public function remove(?Track $track): JsonResponse
    {
        if (!$track) {
            return $this->createNotFoundErrorResponse('Отслеживание не существует');
        }

        $this->trackService->remove($track);

        return $this->createSuccessResponse('Отслеживание удалено успешно');
    }

    /**
     * @Route("/edit/{id}", methods={"POST"})
     */
    public function edit(Request $request, ?Track $track): JsonResponse
    {
        if (!$track) {
            return $this->createNotFoundErrorResponse('Отслеживание не существует');
        }

        $form = $this->createForm(TrackFormType::class, $this->requestService->getDTOFromEntity($track));

        $form->submit($request->query->all());

        if ($form->isValid()) {
            $track = $this->requestService->getEntityFromDTO($form->getData());
            $this->trackService->save($track);

            return $this->createSuccessResponse('Отслеживание обновлено успешно');
        }

        return $this->createErrorResponseWithFields(
            'При обновлении отслеживания произошла ошибка',
            $this->getFormErrors($form)
        );
    }
}
