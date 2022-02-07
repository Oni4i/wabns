<?php
declare(strict_types = 1);

namespace App\Service\API;

use App\Contract\DTO\DTOEntityInterface;
use App\DTO\Request\TrackRequestDTO;
use App\Entity\Track;
use App\Service\TrackService;
use Doctrine\ORM\EntityManagerInterface;

class TrackRequestService extends AbstractAPIService
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


    public static function getDTOClass(): string
    {
        return TrackRequestDTO::class;
    }
}
