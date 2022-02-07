<?php
declare(strict_types = 1);

namespace App\Contract\DTO;

use App\Contract\Entity\EntityInterface;

interface EntityFromDTOGetterInterface
{
    public function getEntityFromDTO(DTOEntityInterface $DTO): EntityInterface;
}
