<?php
declare(strict_types = 1);

namespace App\Entity;

use App\Contract\Entity\EntityInterface;
use App\Repository\TrackRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=TrackRepository::class)
 * @ORM\Table(name="track")
 * @ORM\HasLifecycleCallbacks()
 */
class Track implements EntityInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\Column(type="decimal", precision=1, scale=0, name="delay_unit", nullable=false)
     *
     * @Assert\NotNull()
     */
    private ?int $delayUnit;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=0, name="delay_count", nullable=false)
     *
     * @Assert\NotNull()
     */
    private ?int $delayCount;

    /**
     * @ORM\Column(type="string", length=255, name="query")
     *
     * @Assert\NotNull()
     */
    private ?string $query;

    /**
     * @ORM\Column(type="boolean", name="is_active", nullable=false)
     *
     * @Assert\Type(type="boolean")
     */
    private ?bool $isActive;

    /**
     * @ORM\Column(type="json", nullable=true, name="filters")
     */
    private ?array $filters = [];

    /**
     * @ORM\Column(type="date", name="next_start", nullable=true)
     */
    private ?\DateTimeInterface $nextStart = null;

    /**
     * @ORM\Column(type="date", name="last_start", nullable=true)
     */
    private ?\DateTimeInterface $lastStart = null;

    /**
     * @ORM\ManyToOne(targetEntity=WorkService::class)
     * @ORM\JoinColumn(name="work_service_id", referencedColumnName="id")
     *
     * @Assert\NotNull()
     */
    private ?WorkService $workService;

    /**
     * @ORM\Column(name="created_at", type="date", nullable=false)
     */
    private \DateTimeInterface $createdAt;

    /**
     * @ORM\Column(name="updated_at", type="date", nullable=false)
     */
    private \DateTimeInterface $updatedAt;

    public function getId(): int
    {
        return $this->id;
    }

    public function getDelayUnit(): ?int
    {
        return $this->delayUnit;
    }

    public function setDelayUnit(?int $delayUnit): Track
    {
        $this->delayUnit = $delayUnit;

        return $this;
    }

    public function getDelayCount(): ?int
    {
        return $this->delayCount;
    }

    public function setDelayCount(?int $delayCount): Track
    {
        $this->delayCount = $delayCount;

        return $this;
    }

    public function getQuery(): ?string
    {
        return $this->query;
    }

    public function setQuery(?string $query): Track
    {
        $this->query = $query;

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(?bool $isActive): Track
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getFilters(): ?array
    {
        return $this->filters;
    }

    public function setFilters(?array $filters): Track
    {
        $this->filters = $filters;

        return $this;
    }

    public function getNextStart(): ?\DateTimeInterface
    {
        return $this->nextStart;
    }

    public function setNextStart(?\DateTimeInterface $nextStart): Track
    {
        $this->nextStart = $nextStart;

        return $this;
    }

    public function getWorkService(): ?WorkService
    {
        return $this->workService;
    }

    public function setWorkService(?WorkService $workService): Track
    {
        $this->workService = $workService;

        return $this;
    }

    public function getLastStart(): ?\DateTimeInterface
    {
        return $this->lastStart;
    }

    public function setLastStart(?\DateTimeInterface $lastStart): self
    {
        $this->lastStart = $lastStart;

        return $this;
    }

    public function getCreatedAt(): \DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): Track
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): \DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): Track
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersistNextStart(): void
    {
        $this->setNextStart(new \DateTimeImmutable('+1 day'));
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersistCreatedAt(): void
    {
        $this->setCreatedAt(new \DateTimeImmutable());
        $this->setUpdatedAt(new \DateTimeImmutable());
    }

    /**
     * @ORM\PreUpdate
     */
    public function preUpdateUpdatedAt(): void
    {
        $this->setUpdatedAt(new \DateTimeImmutable());
    }
}
