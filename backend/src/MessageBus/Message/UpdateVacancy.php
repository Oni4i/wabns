<?php
declare(strict_types = 1);

namespace App\MessageBus\Message;

use App\Entity\Track;

class UpdateVacancy
{
    private int $trackId;
    private string $alias;

    public function __construct(Track $track)
    {
        $this->trackId = $track->getId();
        $this->alias = $track->getWorkService()->getAlias();
    }

    public function getTrackId(): int
    {
        return $this->trackId;
    }

    public function getAlias(): string
    {
        return $this->alias;
    }
}
