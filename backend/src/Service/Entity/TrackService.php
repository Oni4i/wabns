<?php
declare(strict_types = 1);

namespace App\Service\Entity;

use App\Entity\Track;
use App\Repository\TrackRepository;
use Doctrine\ORM\EntityManagerInterface;

class TrackService
{
    private TrackRepository        $trackRepository;
    private EntityManagerInterface $entityManager;

    public function __construct(
        TrackRepository $trackRepository,
        EntityManagerInterface $entityManager
    )
    {
        $this->trackRepository = $trackRepository;
        $this->entityManager = $entityManager;
    }

    public function findAll(): array
    {
        return $this->trackRepository->createQueryBuilder('t')->getQuery()->getResult();
    }

    public function findAllForUpdate(): array
    {
        return $this->trackRepository->findAllLEForDate(new \DateTimeImmutable());
    }

    public function save(Track $track): void
    {
        $this->entityManager->persist($track);
        $this->entityManager->flush();
    }

    public function remove(Track $track): void
    {
        $this->entityManager->remove($track);
        $this->entityManager->flush();
    }
}