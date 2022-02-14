<?php
declare(strict_types = 1);

namespace App\Controller\API;

use App\Entity\Track;
use App\Service\Chart\SalaryPlotService;
use App\Service\Chart\VacancyPlotService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/chart")
 */
class ChartController extends AbstractAPIController
{
    /**
     * @Route("/vacancy-plot/{id}", requirements={"id"="\d+"})
     */
    public function vacancyPlotData(Request $request, ?Track $track, VacancyPlotService $vacancyPlotService): JsonResponse
    {
        if (!$track) {
            return $this->createNotFoundErrorResponse('Отслеживание не существует');
        }

        return $this->createSuccessResponse($vacancyPlotService->getPlotData($request, $track));
    }

    /**
     * @Route("/salary-plot/{id}", requirements={"id"="\d+"})
     */
    public function salaryPlotData(Request $request, ?Track $track, SalaryPlotService $salaryPlotService): JsonResponse
    {
        if (!$track) {
            return $this->createNotFoundErrorResponse('Отслеживание не существует');
        }

        return $this->createSuccessResponse($salaryPlotService->getPlotData($request, $track));
    }
}
