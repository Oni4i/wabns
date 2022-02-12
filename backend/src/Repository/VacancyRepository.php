<?php
declare(strict_types = 1);

namespace App\Repository;

use App\Entity\Vacancy;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class VacancyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Vacancy::class);
    }

    public function findAllByTrackAndDate(int $trackId, ?string $from, ?string $to): array
    {
        $qb = $this->createQueryBuilder('v')
            ->leftJoin('v.trackOperation', 'vt')
            ->leftJoin('vt.track', 'vtt');

        $where = $qb->expr()->andX();

        $where->add($qb->expr()->eq('vtt.id', $trackId));

        if ($from) {
            $where->add($qb->expr()->gte('vt.createdAt', ':from'));
            $qb->setParameter('from', $from);
        }

        if ($to) {
            $where->add($qb->expr()->lte('vt.createdAt', ':to'));
            $qb->setParameter('to', $to);
        }

        $qb->where($where);

        return $qb->getQuery()->getResult();
    }
}
