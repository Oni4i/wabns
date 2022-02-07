<?php
declare(strict_types = 1);

namespace App\Contract\DTO;

use App\Contract\Entity\EntityInterface;

interface DTOEntityInterface extends DTOInterface
{
    public function getEntity(): EntityInterface;
}
