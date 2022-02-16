<?php
declare(strict_types = 1);

namespace App\DTO\Request;

use App\Contract\DTO\DTOInterface;

class AuthUserRequestDTO implements DTOInterface
{
    private ?string $password = '';
    private ?string $email = '';

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(?string $password): AuthUserRequestDTO
    {
        $this->password = $password;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): AuthUserRequestDTO
    {
        $this->email = $email;

        return $this;
    }
}
