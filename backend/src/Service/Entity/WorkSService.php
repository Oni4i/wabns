<?php
declare(strict_types = 1);

namespace App\Service\Entity;

use App\Repository\WorkServiceRepository;

class WorkSService
{
    private WorkServiceRepository  $workServiceRepository;

    public function __construct(
        WorkServiceRepository $workServiceRepository
    )
    {
        $this->workServiceRepository = $workServiceRepository;
    }

    public function findAll(): array
    {
        return $this->workServiceRepository->createQueryBuilder('ws')->getQuery()->getResult();
    }
}
