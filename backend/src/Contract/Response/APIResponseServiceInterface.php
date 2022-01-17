<?php
declare(strict_types = 1);

namespace App\Contract\Response;

use Symfony\Component\HttpFoundation\JsonResponse;

interface APIResponseServiceInterface extends ResponseServiceInterface
{
    public function createSuccessResponse($data): JsonResponse;
    public function createErrorResponse(string $message): JsonResponse;
    public function createNotFoundResponse(string $message): JsonResponse;
}
