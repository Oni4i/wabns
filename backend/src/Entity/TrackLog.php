<?php
declare(strict_types = 1);

namespace App\Entity;

use App\Repository\TrackLogRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TrackLogRepository::class)
 */
class TrackLog
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $created_at;

    /**
     * @ORM\OneToMany(targetEntity=Vacancy::class, mappedBy="trackLog")
     */
    private $vacancies;

    public function __construct()
    {
        $this->vacancies = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    /**
     * @return Collection|Vacancy[]
     */
    public function getVacancies(): Collection
    {
        return $this->vacancies;
    }

    public function addVacancy(Vacancy $vacancy): self
    {
        if (!$this->vacancies->contains($vacancy)) {
            $this->vacancies[] = $vacancy;
            $vacancy->setTrackLog($this);
        }

        return $this;
    }

    public function removeVacancy(Vacancy $vacancy): self
    {
        if ($this->vacancies->removeElement($vacancy)) {
            // set the owning side to null (unless already changed)
            if ($vacancy->getTrackLog() === $this) {
                $vacancy->setTrackLog(null);
            }
        }

        return $this;
    }
}
