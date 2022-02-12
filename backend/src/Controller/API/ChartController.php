<?php
declare(strict_types = 1);

namespace App\Controller\API;

use App\Entity\Track;
use App\Service\Chart\VacancyPlotService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/chart")
 */
class ChartController extends AbstractAPIController
{
    private VacancyPlotService $vacancyPlotService;

    public function __construct(VacancyPlotService $vacancyPlotService)
    {
        $this->vacancyPlotService = $vacancyPlotService;
    }

    /**
     * @Route("/vacancy-plot/{id}", requirements={"id"="\d+"})
     */
    public function vacancyPlotData(Request $request, ?Track $track): JsonResponse
    {
        if (!$track) {
            return $this->createNotFoundErrorResponse('Отслеживание не существует');
        }

        return $this->createSuccessResponse($this->vacancyPlotService->getPlotData($request, $track));
    }
}
