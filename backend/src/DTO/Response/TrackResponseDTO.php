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

    public function setId(int $id): TrackResponseDTO
    {
        $this->id = $id;

        return $this;
    }

    public function setDelayUnit(int $delayUnit): TrackResponseDTO
    {
        $this->delayUnit = $delayUnit;

        return $this;
    }

    public function setDelayCount(int $delayCount): TrackResponseDTO
    {
        $this->delayCount = $delayCount;

        return $this;
    }

    public function setQuery(string $query): TrackResponseDTO
    {
        $this->query = $query;

        return $this;
    }

    public function setIsActive(bool $isActive): TrackResponseDTO
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function setFilters(array $filters): TrackResponseDTO
    {
        $this->filters = $filters;

        return $this;
    }


    public function setNextStart(\DateTimeInterface $nextStart): TrackResponseDTO
    {
        $this->nextStart = $nextStart;

        return $this;
    }

    public function setLastStart(?\DateTimeInterface $lastStart): TrackResponseDTO
    {
        $this->lastStart = $lastStart;

        return $this;
    }

    public function setWorkServiceTitle(string $workServiceTitle): TrackResponseDTO
    {
        $this->workServiceTitle = $workServiceTitle;

        return $this;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): TrackResponseDTO
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function setUpdateAt(\DateTimeInterface $updateAt): TrackResponseDTO
    {
        $this->updateAt = $updateAt;

        return $this;
    }

    public function setLogo(string $logo): TrackResponseDTO
    {
        $this->logo = $logo;

        return $this;
    }
}
