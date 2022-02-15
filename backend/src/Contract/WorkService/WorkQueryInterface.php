<?php
declare(strict_types = 1);

namespace App\Contract\WorkService;

use App\Entity\Track;

interface WorkQueryInterface
{
    public function getParamsByTrack(Track $track): QueryParamsInterface;
    public function getNextPage(QueryParamsInterface $queryParams): QueryParamsInterface;
}
