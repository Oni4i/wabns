<?php
declare(strict_types = 1);

namespace App\Entity;

use App\Repository\WorkServiceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=WorkServiceRepository::class)
 */
class WorkService
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
    private string $alias;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $title;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $description = null;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $url;

    /**
     * @ORM\OneToMany(targetEntity=Track::class, mappedBy="workService")
     */
    private Collection $tracks;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $service;

    public function __construct()
    {
        $this->tracks = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getAlias(): ?string
    {
        return $this->alias;
    }

    public function setAlias(string $alias): self
    {
        $this->alias = $alias;

        return $this;
    }

    public function getTitle(): string
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

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    /**
     * @return Collection|Track[]
     */
    public function getTracks(): Collection
    {
        return $this->tracks;
    }

    /**
     * @param Collection|Track[] $tracks
     */
    public function setTracks(Collection $tracks): self
    {
        $this->tracks = $tracks;

        return $this;
    }

    public function addTrack(Track $track): self
    {
        if (!$this->tracks->contains($track)) {
            $this->tracks->add($track);
            $track->setWorkService($this);
        }

        return $this;
    }

    public function removeTrack(Track $track): self
    {
        if ($this->tracks->removeElement($track)) {
            if ($track->getWorkService() === $this) {
                $track->setWorkService(null);
            }
        }

        return $this;
    }

    public function getService(): string
    {
        return $this->service;
    }

    public function setService(string $service): self
    {
        $this->service = $service;

        return $this;
    }
}
