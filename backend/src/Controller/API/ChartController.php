<?php
declare(strict_types = 1);

namespace App\Controller\API;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/chart")
 */
class ChartController extends AbsractAPIController
{
    /**
     * @Route("/vacancy-plot")
     */
    public function vacancyPlotData(): JsonResponse
    {
        return $this->createSuccessResponse(['test']);
    }
}
