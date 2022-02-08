<?php
declare(strict_types = 1);

namespace App\DTO\Response;

class TrackResponseDTO extends AbstractResponseDTO
{
    public int $id;
    public int $delayUnit;
    public int $delayCount;
    public string $query;
    public bool $isActive;
    public array $filters;
    public string $workServiceTitle;
    public \DateTimeInterface $nextStart;
    public ?\DateTimeInterface $lastStart = null;
    public \DateTimeInterface $createdAt;
    public \DateTimeInterface $updateAt;
    public string $logo = '';

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): TrackResponseDTO
    {
        $this->id = $id;

        return $this;
    }

    public function getDelayUnit(): int
    {
        return $this->delayUnit;
    }

    public function setDelayUnit(int $delayUnit): TrackResponseDTO
    {
        $this->delayUnit = $delayUnit;

        return $this;
    }

    public function getDelayCount(): int
    {
        return $this->delayCount;
    }

    public function setDelayCount(int $delayCount): TrackResponseDTO
    {
        $this->delayCount = $delayCount;

        return $this;
    }

    public function getQuery(): string
    {
        return $this->query;
    }

    public function setQuery(string $query): TrackResponseDTO
    {
        $this->query = $query;

        return $this;
    }

    public function isActive(): bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): TrackResponseDTO
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getFilters(): array
    {
        return $this->filters;
    }

    public function setFilters(array $filters): TrackResponseDTO
    {
        $this->filters = $filters;

        return $this;
    }

    public function getNextStart(): \DateTimeInterface
    {
        return $this->nextStart;
    }

    public function setNextStart(\DateTimeInterface $nextStart): TrackResponseDTO
    {
        $this->nextStart = $nextStart;

        return $this;
    }

    public function getLastStart(): ?\DateTimeInterface
    {
        return $this->lastStart;
    }

    public function setLastStart(?\DateTimeInterface $lastStart): TrackResponseDTO
    {
        $this->lastStart = $lastStart;

        return $this;
    }

    public function getWorkServiceTitle(): string
    {
        return $this->workServiceTitle;
    }

    public function setWorkServiceTitle(string $workServiceTitle): TrackResponseDTO
    {
        $this->workServiceTitle = $workServiceTitle;

        return $this;
    }

    public function getCreatedAt(): \DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): TrackResponseDTO
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdateAt(): \DateTimeInterface
    {
        return $this->updateAt;
    }

    public function setUpdateAt(\DateTimeInterface $updateAt): TrackResponseDTO
    {
        $this->updateAt = $updateAt;

        return $this;
    }

    public function getLogo(): string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): TrackResponseDTO
    {
        $this->logo = $logo;

        return $this;
    }
}
