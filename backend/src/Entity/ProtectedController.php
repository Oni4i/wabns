<?php
declare(strict_types = 1);

namespace App\Entity;

use App\Repository\ProtectedControllerRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProtectedControllerRepository::class)
 */
class ProtectedController
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\Column(type="text")
     */
    private string $classname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $title;

    public function getId(): int
    {
        return $this->id;
    }

    public function getClassname(): string
    {
        return $this->classname;
    }

    public function setClassname(string $classname): self
    {
        $this->classname = $classname;

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
}
