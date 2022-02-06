<?php

namespace App\Repository;

use App\Entity\WorkService;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method WorkService|null find($id, $lockMode = null, $lockVersion = null)
 * @method WorkService|null findOneBy(array $criteria, array $orderBy = null)
 * @method WorkService[]    findAll()
 * @method WorkService[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WorkServiceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, WorkService::class);
    }

    // /**
    //  * @return WorkService[] Returns an array of WorkService objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('w.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?WorkService
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
