<?php
declare(strict_types = 1);

namespace App\Contract;

use App\Entity\Track;
use Symfony\Component\HttpFoundation\Request;

interface ChartServiceInterface
{
    public function getPlotData(Request $request, Track $track): array;
}
