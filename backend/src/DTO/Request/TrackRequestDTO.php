<?php
declare(strict_types = 1);

namespace App\DTO\Request;

use App\Contract\DTO\DTOEntityInterface;
use App\Entity\Track;
use App\Entity\WorkService;
use App\Validation as AppAssert;

/**
 * @AppAssert\DTOValidationWithEntity
 */
class TrackRequestDTO implements DTOEntityInterface
{
    private ?int $delayUnit = 1;
    private ?int $delayCount = 1;
    private ?string $query = '';
    private ?bool $isActive;
    private ?array $filters = [];
    private ?WorkService $workService = null;
    private Track $entity;

    public function __construct()
    {
        $this->entity = new Track();
    }

    public function getDelayUnit(): ?int
    {
        return $this->delayUnit;
    }

    public function setDelayUnit(?int $delayUnit): TrackRequestDTO
    {
        $this->delayUnit = $delayUnit;

        return $this;
    }

    public function getDelayCount(): ?int
    {
        return $this->delayCount;
    }

    public function setDelayCount(?int $delayCount): TrackRequestDTO
    {
        $this->delayCount = $delayCount;

        return $this;
    }

    public function getQuery(): ?string
    {
        return $this->query;
    }

    public function setQuery(?string $query): TrackRequestDTO
    {
        $this->query = $query;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(?bool $isActive): TrackRequestDTO
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getFilters(): ?array
    {
        return $this->filters;
    }

    public function setFilters(?array $filters): TrackRequestDTO
    {
        $this->filters = $filters;

        return $this;
    }

    public function getWorkService(): ?WorkService
    {
        return $this->workService;
    }

    public function setWorkService(?WorkService $workService): TrackRequestDTO
    {
        $this->workService = $workService;

        return $this;
    }

    public function getEntity(): Track
    {
        return $this->entity;
    }

    public function setEntity(Track $entity): TrackRequestDTO
    {
        $this->entity = $entity;

        return $this;
    }
}
