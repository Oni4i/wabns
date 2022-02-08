<?php
declare(strict_types = 1);

namespace App\Service\WorkService;

use App\Entity\Track;

class HeadHunterRequestService extends AbstractRequestWorkService
{
    public function updateVacancies(Track $track): int
    {
        $html = $this->makeRequest($track);

        dd($html);
    }

    protected function getAlias(): string
    {
        return 'hh';
    }
}
