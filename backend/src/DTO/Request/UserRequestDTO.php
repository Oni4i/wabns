<?php
declare(strict_types = 1);

namespace App\DTO\Request;

use App\Contract\DTO\DTOEntityInterface;
use App\Contract\DTO\HasPasswordSetterInterface;
use App\Entity\User;
use App\Validation as AppAssert;

/**
 * @AppAssert\DTOValidationWithEntity
 */
class UserRequestDTO implements DTOEntityInterface, HasPasswordSetterInterface
{
    private ?string $email = '';
    private ?string $password = '';
    private User $user;

    public function __construct()
    {
        $this->user = new User();
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): UserRequestDTO
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(?string $password): UserRequestDTO
    {
        $this->password = $password;

        return $this;
    }

    public function setEntity(User $user): UserRequestDTO
    {
        $this->user = $user;

        return $this;
    }

    public function getEntity(): User
    {
        return $this->user;
    }
}
