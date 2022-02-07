<?php
declare(strict_types = 1);

namespace App\Contract\DTO;

use App\Contract\Entity\EntityInterface;

interface DTOFromEntityGetterInterface
{
    public function getDTOFromEntity(EntityInterface $entity): DTOInterface;
}
