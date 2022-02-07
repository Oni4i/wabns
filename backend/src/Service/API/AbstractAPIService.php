<?php
declare(strict_types = 1);

namespace App\Service\API;

use App\Contract\DTO\DTOFromEntityGetterInterface;
use App\Contract\DTO\EntityFromDTOGetterInterface;
use App\Contract\Validation\ValidationServiceInterface;

abstract class AbstractAPIService implements
    EntityFromDTOGetterInterface,
    DTOFromEntityGetterInterface,
    ValidationServiceInterface
{
}
