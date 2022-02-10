<?php
declare(strict_types = 1);

namespace App\Contract\WorkService;

use App\Entity\Track;

interface RequestWorkServiceInterface
{
    public function updateVacancies(Track $track): array;
}
