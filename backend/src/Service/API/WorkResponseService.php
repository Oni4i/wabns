<?php
declare(strict_types = 1);

namespace App\Service\API;

use App\Contract\DTO\DTOFromEntityGetterInterface;
use App\Contract\DTO\DTOInterface;
use App\Contract\Entity\EntityInterface;
use App\DTO\Response\WorkServiceResponseDTO;
use App\Entity\WorkService;

class WorkResponseService implements DTOFromEntityGetterInterface
{
    /**
     * @param WorkService $entity
     */
    public function getDTOFromEntity(EntityInterface $entity): WorkServiceResponseDTO
    {
        $DTO = new WorkServiceResponseDTO();

        $DTO
            ->setId($entity->getId())
            ->setTitle($entity->getTitle())
            ->setAlias($entity->getAlias())
            ->setDescription($entity->getDescription())
            ->setUrl($entity->getUrl());

        return $DTO;
    }
}
