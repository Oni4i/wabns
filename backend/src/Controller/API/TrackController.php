<?php
declare(strict_types = 1);

namespace App\Controller\API;

use App\DTO\Request\TrackRequestDTO;
use App\Form\TrackFormType;
use App\Service\API\TrackRequestService;
use App\Service\TrackService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/track")
 */
class TrackController extends AbsractAPIController
{
    private TrackService        $trackService;
    private TrackRequestService $requestService;

    public function __construct(TrackService $trackService, TrackRequestService $requestService)
    {
        $this->trackService = $trackService;
        $this->requestService = $requestService;
    }

    /**
     * @Route("/")
     */
    public function index(): JsonResponse
    {
        return $this->createSuccessResponse($this->trackService->findAll());
    }

    /**
     * @Route("/add")
     */
    public function add(Request $request): JsonResponse
    {
        $form = $this->createForm(TrackFormType::class, new TrackRequestDTO());

        $form->submit($request->query->all());

        if ($form->isValid()) {
            $track = $this->requestService->getEntityFromDTO($form->getData());
            $this->trackService->save($track);

            return $this->createSuccessResponse(null);
        }

        return $this->createErrorResponseWithFields('gg', $this->getFormErrors($form));
    }
}
