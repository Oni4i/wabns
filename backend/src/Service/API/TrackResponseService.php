<?php
declare(strict_types = 1);

namespace App\Service\API;

use App\Contract\DTO\DTOFromEntityGetterInterface;
use App\Contract\Entity\EntityInterface;
use App\DTO\Response\TrackResponseDTO;
use App\Entity\Track;

class TrackResponseService implements DTOFromEntityGetterInterface
{
    /**
     * @param Track $entity
     */
    public function getDTOFromEntity(EntityInterface $entity): TrackResponseDTO
    {
        $DTO = new TrackResponseDTO();

        $DTO
            ->setUpdateAt($entity->getUpdatedAt())
            ->setCreatedAt($entity->getCreatedAt())
            ->setIsActive($entity->getIsActive())
            ->setDelayCount($entity->getDelayCount())
            ->setDelayUnit($entity->getDelayUnit())
            ->setFilters($entity->getFilters())
            ->setQuery($entity->getQuery())
            ->setNextStart($entity->getNextStart())
            ->setId($entity->getId())
            ->setLastStart($entity->getLastStart())
            ->setWorkServiceTitle($entity->getWorkService()->getTitle())
            ->setLogo('');

        return $DTO;
    }
}
