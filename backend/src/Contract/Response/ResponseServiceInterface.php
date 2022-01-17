<?php
declare(strict_types = 1);

namespace App\Contract\Response;

use Symfony\Component\HttpFoundation\Response;

interface ResponseServiceInterface
{
    public function createSuccessResponse($data): Response;
    public function createErrorResponse(string $message): Response;
    public function createNotFoundResponse(string $message): Response;
}
