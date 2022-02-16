<?php
declare(strict_types = 1);

namespace App\Service\Entity;

class ProtectedControllerService
{
    public function isControllerProtected(): bool
    {
        return true;
    }
}
