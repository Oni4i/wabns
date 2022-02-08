<?php
declare(strict_types = 1);

namespace App\Entity;

use App\Contract\Entity\EntityInterface;
use App\Repository\VacancyRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=VacancyRepository::class)
 * @ORM\Table(name="vacancy")
 */
class Vacancy implements EntityInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $description;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=0, nullable=true)
     */
    private ?int $salary = null;

    /**
     * @ORM\ManyToOne(targetEntity=TrackOperation::class, inversedBy="vacancies")
     * @ORM\JoinColumn(nullable=false)
     */
    private TrackOperation $trackOperation;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $company;

    public function getId(): int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getSalary(): ?string
    {
        return $this->salary;
    }

    public function setSalary(?string $salary): self
    {
        $this->salary = $salary;

        return $this;
    }

    public function getTrackOperation(): TrackOperation
    {
        return $this->trackOperation;
    }

    public function setTrackOperation(TrackOperation $trackOperation): Vacancy
    {
        $this->trackOperation = $trackOperation;

        return $this;
    }

    public function getCompany(): ?string
    {
        return $this->company;
    }

    public function setCompany(string $company): self
    {
        $this->company = $company;

        return $this;
    }
}
