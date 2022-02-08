<?php
declare(strict_types = 1);

namespace App\Controller\API;

use App\Repository\TrackRepository;
use App\Service\API\WorkResponseService;
use App\Service\Entity\WorkSService;
use App\Service\WorkService\HeadHunterRequestService;
use App\Service\WorkService\RequestWorkService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/work-service")
 */
class WorkServiceController extends AbstractAPIController
{
    private WorkResponseService $responseService;
    private WorkSService        $workSService;

    public function __construct(
        WorkResponseService $responseService,
        WorkSService $workSService
    )
    {
        $this->responseService = $responseService;
        $this->workSService = $workSService;
    }

    /**
     * @Route("/", methods={"GET"})
     */
    public function index(HeadHunterRequestService $workService, TrackRepository $trackRepository): JsonResponse
    {
        $workService->updateVacancies($trackRepository->findAll()[0]);
        $workServices = $this->workSService->findAll();

        $DTOs = [];

        foreach ($workServices as $workService) {
            $DTOs[] = $this->responseService->getDTOFromEntity($workService);
        }

        return $this->createSuccessResponse($DTOs);
    }
}
