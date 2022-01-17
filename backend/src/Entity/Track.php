<?php
declare(strict_types = 1);

namespace App\Entity;

use App\Repository\TrackRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TrackRepository::class)
 * @ORM\Entity
 * @ORM\Table(name="track")
 */
class Track
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\Column(type="decimal", precision=1, scale=0, name="delay_unit")
     */
    private int $delayUnit;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=0, name="delay_count")
     */
    private int $delayCount = 1;

    /**
     * @ORM\Column(type="string", length=255, name="query")
     */
    private string $query;

    /**
     * @ORM\Column(type="boolean", name="is_active")
     */
    private bool $isActive;

    /**
     * @ORM\Column(type="json", nullable=true, name="filters")
     */
    private array $filters = [];

    /**
     * @ORM\Column(type="date", name="next_start")
     */
    private \DateTimeInterface $nextStart;

    /**
     * @ORM\ManyToOne(targetEntity=WorkService::class)
     * @ORM\JoinColumn(name="work_service_id", referencedColumnName="id")
     */
    private WorkService $workService;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDelayUnit(): int
    {
        return $this->delayUnit;
    }

    public function setDelayUnit(int $delayUnit): Track
    {
        $this->delayUnit = $delayUnit;

        return $this;
    }

    public function getDelayCount(): int
    {
        return $this->delayCount;
    }

    public function setDelayCount(int $delayCount): Track
    {
        $this->delayCount = $delayCount;

        return $this;
    }

    public function getQuery(): string
    {
        return $this->query;
    }

    public function setQuery(string $query): Track
    {
        $this->query = $query;

        return $this;
    }

    public function isActive(): bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): Track
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getFilters(): array
    {
        return $this->filters;
    }

    public function setFilters(array $filters): Track
    {
        $this->filters = $filters;

        return $this;
    }

    public function getNextStart(): \DateTimeInterface
    {
        return $this->nextStart;
    }

    public function setNextStart(\DateTimeInterface $nextStart): Track
    {
        $this->nextStart = $nextStart;

        return $this;
    }

    public function getWorkService(): WorkService
    {
        return $this->workService;
    }

    public function setWorkService(WorkService $workService): Track
    {
        $this->workService = $workService;

        return $this;
    }
}
