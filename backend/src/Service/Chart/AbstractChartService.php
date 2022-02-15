<?php
declare(strict_types = 1);

namespace App\Service\Chart;

use App\Contract\ChartServiceInterface;
use App\Entity\Track;

abstract class AbstractChartService implements ChartServiceInterface
{
    protected function getDateRange(
        \DateTimeImmutable $from,
        \DateTimeImmutable $to,
        Track $track
    ): array
    {
        $range = [];

        $keyDate = $from;

        while ($keyDate->getTimestamp() <= $to->getTimestamp()) {
            $range[$keyDate->format('Y-m-d')] = 0;

            $keyDate = $keyDate->modify(sprintf(
                '+%d day',
                $track->getDelayCount()
            ));
        }

        return $range;
    }
}
