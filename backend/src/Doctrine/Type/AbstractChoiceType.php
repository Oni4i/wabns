<?php
declare(strict_types = 1);

namespace App\Doctrine\Type;

use Doctrine\DBAL\Platforms\AbstractPlatform;
use Doctrine\DBAL\Types\IntegerType;
use http\Exception\InvalidArgumentException;

abstract class AbstractChoiceType extends IntegerType
{
    public function convertToDatabaseValue($value, AbstractPlatform $platform): int
    {
        if (!array_key_exists($value, $this->getTypes())) {
            throw new InvalidArgumentException(
                \sprintf(
                    'Invalid %s value. Available values: %s',
                    $value,
                    json_encode($this->getTypes())
                )
            );
        }

        return $value;
    }

    abstract public function getTypes(): array;
}
