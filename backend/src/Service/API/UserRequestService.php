<?php
declare(strict_types = 1);

namespace App\Service\API;

use App\Contract\DTO\DTOEntityInterface;
use App\Contract\DTO\EntityFromDTOGetterInterface;
use App\Contract\Validation\ValidationServiceInterface;
use App\DTO\Request\UserRequestDTO;
use App\Entity\User;

class UserRequestService implements
    EntityFromDTOGetterInterface,
    ValidationServiceInterface
{
    /**
     * @param UserRequestDTO $DTO
     */
    public function getEntityFromDTO(DTOEntityInterface $DTO): User
    {
        $entity = $DTO->getEntity();

        $entity
            ->setPassword($DTO->getPassword())
            ->setEmail($DTO->getEmail());

        return $entity;
    }

    public static function getDTOClass(): string
    {
        return UserRequestDTO::class;
    }
}
