<?php
declare(strict_types = 1);

namespace App\Entity;

use App\Contract\Entity\EntityInterface;
use App\Repository\TrackOperationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TrackOperationRepository::class)
 * @ORM\Table(name="track_operation")
 * @ORM\HasLifecycleCallbacks
 */
class TrackOperation implements EntityInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\Column(type="date", name="created_at")
     */
    private \DateTimeInterface $createdAt;

    /**
     * @ORM\OneToMany(targetEntity=Vacancy::class, mappedBy="trackOperation")
     */
    private Collection $vacancies;

    /**
     * @ORM\ManyToOne(targetEntity=Track::class, inversedBy="trackOperations")
     * @ORM\JoinColumn(nullable=false)
     */
    private Track $track;

    public function __construct()
    {
        $this->vacancies = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersistCreatedAt(): void
    {
        $this->setCreatedAt(new \DateTimeImmutable());
    }

    /**
     * @return Collection|Vacancy[]
     */
    public function getVacancies(): Collection
    {
        return $this->vacancies;
    }

    public function getTrack(): ?Track
    {
        return $this->track;
    }

    public function setTrack(?Track $track): self
    {
        $this->track = $track;

        return $this;
    }
}
