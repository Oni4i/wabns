<?php
declare(strict_types = 1);

namespace App\MessageBus\Message;

use App\Entity\Track;

class UpdateVacancy
{
    private Track $track;
    private string $alias;

    public function __construct(Track $track)
    {
        $this->track = $track;
        $this->alias = $track->getWorkService()->getAlias();
    }

    public function getTrack(): Track
    {
        return $this->track;
    }

    public function getAlias(): string
    {
        return $this->alias;
    }
}
