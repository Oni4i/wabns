<?php
declare(strict_types = 1);

namespace App\DTO\Response;

use App\Contract\DTO\DTOInterface;

class AbstractResponseDTO implements \JsonSerializable, DTOInterface
{
    public function jsonSerialize(): array
    {
        return get_object_vars($this);
    }
}
