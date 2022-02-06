<?php
declare(strict_types = 1);

namespace App\Controller\API;

use App\Entity\Track;
use App\Form\TrackFormType;
use App\Service\TrackService;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/track")
 */
class TrackController extends AbsractAPIController
{
    private TrackService $trackService;

    public function __construct(TrackService $trackService)
    {
        $this->trackService = $trackService;
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
        $form = $this->createForm(TrackFormType::class, new Track());

        $form->submit($request->query->all());

        if ($form->isValid()) {
            dd('test');
        }

        return $this->createErrorResponseWithFields('gg', $this->getFormErrors($form));
    }
}
