<?php
declare(strict_types = 1);

namespace App\Service\API;

use App\Contract\DTO\DTOEntityInterface;
use App\Contract\DTO\DTOFromEntityGetterInterface;
use App\Contract\DTO\EntityFromDTOGetterInterface;
use App\Contract\Entity\EntityInterface;
use App\Contract\Validation\ValidationServiceInterface;
use App\DTO\Request\TrackRequestDTO;
use App\Entity\Track;
use App\Service\Entity\TrackService;

class TrackRequestService implements
    EntityFromDTOGetterInterface,
    DTOFromEntityGetterInterface,
    ValidationServiceInterface
{
    private TrackService $trackService;

    public function __construct(TrackService $trackService)
    {
        $this->trackService = $trackService;
    }

    /**
     * @param TrackRequestDTO $DTO
     */
    public function getEntityFromDTO(DTOEntityInterface $DTO): Track
    {
        $entity = $DTO->getEntity();

        $entity
            ->setIsActive($DTO->isActive())
            ->setDelayCount($DTO->getDelayCount())
            ->setDelayUnit($DTO->getDelayUnit())
            ->setFilters($DTO->getFilters())
            ->setQuery($DTO->getQuery())
            ->setWorkService($DTO->getWorkService());

        return $entity;
    }

    /**
     * @param Track $entity
     */
    public function getDTOFromEntity(EntityInterface $entity): TrackRequestDTO
    {
        $DTO = new TrackRequestDTO();

        $DTO
            ->setWorkService($entity->getWorkService())
            ->setQuery($entity->getQuery())
            ->setFilters($entity->getFilters())
            ->setDelayUnit($entity->getDelayUnit())
            ->setDelayCount($entity->getDelayCount())
            ->setIsActive($entity->getIsActive())
            ->setEntity($entity);

        return $DTO;
    }

    public static function getDTOClass(): string
    {
        return TrackRequestDTO::class;
    }
}
