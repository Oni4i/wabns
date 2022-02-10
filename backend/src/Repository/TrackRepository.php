<?php
declare(strict_types = 1);

namespace App\Repository;

use App\Entity\Track;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class TrackRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Track::class);
    }

    public function findAllLEForDate(\DateTimeImmutable $dateTimeImmutable): array
    {
        return $this->createQueryBuilder('t')
            ->where('t.nextStart <= :date')
            ->andWhere('t.isActive = :isActive')
            ->setParameters([
                'date' => $dateTimeImmutable->format('Y-m-d'),
                'isActive' => true
            ])
            ->getQuery()
            ->getResult();
    }
}
