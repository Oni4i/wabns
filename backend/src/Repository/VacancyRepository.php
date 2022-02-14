<?php
declare(strict_types = 1);

namespace App\Repository;

use App\Entity\Vacancy;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr\Composite;
use Doctrine\ORM\QueryBuilder;
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
        $this->addFromToDateExpr($qb, $where, $from, $to);

        $qb->where($where);

        return $qb->getQuery()->getResult();
    }

    public function findAllForSalary(
        int $trackId,
        string $currency,
        ?string $from,
        ?string $to
    ): array
    {
        $qb = $this->createQueryBuilder('v')
            ->leftJoin('v.trackOperation', 'vt')
            ->leftJoin('vt.track', 'vtt');

        $where = $qb->expr()->andX();

        $where->add($qb->expr()->eq('vtt.id', $trackId));
        $where->add($qb->expr()->isNotNull('v.salary'));
        $where->add($qb->expr()->eq('v.currency', $qb->expr()->literal($currency)));
        $this->addFromToDateExpr($qb, $where, $from, $to);

        $qb->where($where);

        return $qb->getQuery()->getResult();
    }

    protected function addFromToDateExpr(
        QueryBuilder $qb,
        Composite $where,
        ?string $from,
        ?string $to
    ): void
    {
        if ($from) {
            $where->add($qb->expr()->gte('vt.createdAt', ':from'));
            $qb->setParameter('from', $from);
        }

        if ($to) {
            $where->add($qb->expr()->lte('vt.createdAt', ':to'));
            $qb->setParameter('to', $to);
        }
    }
}
