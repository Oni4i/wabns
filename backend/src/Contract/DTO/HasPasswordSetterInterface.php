<?php
declare(strict_types = 1);

namespace App\Contract\DTO;

interface HasPasswordSetterInterface
{
    public function setPassword(?string $password): self;
}
