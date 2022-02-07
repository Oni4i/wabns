<?php
declare(strict_types = 1);

namespace App\Service;

use App\Contract\Response\APIResponseServiceInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class APIResponseService implements APIResponseServiceInterface
{
    public function createSuccessResponse($data): JsonResponse
    {
        return new JsonResponse([
            "error" => false,
            'code' => 200,
            'data' => $data,
        ]);
    }

    public function createErrorResponse(string $message): JsonResponse
    {
        return new JsonResponse([
            "error" => true,
            'code' => 500,
            'data' => $message,
            'message' => $message,
        ]);
    }

    public function createNotFoundResponse(string $message): JsonResponse
    {
        return new JsonResponse([
            "error" => true,
            'code' => 404,
            'data' => $message,
            'message' => $message,
        ]);
    }

    public function createErrorResponseWithFields(string $message, array $fields): JsonResponse
    {
        return new JsonResponse([
            "error" => true,
            'code' => 501,
            'data' => $fields,
            'message' => $message,
        ]);
    }
}
