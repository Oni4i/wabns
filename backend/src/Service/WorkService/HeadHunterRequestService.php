<?php
declare(strict_types = 1);

namespace App\Service\WorkService;

use App\Entity\Track;

/** Is nessesary request class? */
class HeadHunterRequestService extends AbstractRequestWorkService
{
    public function updateVacancies(Track $track): array
    {
        return $this->handleAll($track);
    }

    public static function getAlias(): string
    {
        return 'hh';
    }
}
