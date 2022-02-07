<?php
declare(strict_types = 1);

namespace App\Contract\Validation;

use App\Contract\DTO\EntityFromDTOGetterInterface;

interface ValidationServiceInterface extends EntityFromDTOGetterInterface
{
    public static function getDTOClass(): string;
}
