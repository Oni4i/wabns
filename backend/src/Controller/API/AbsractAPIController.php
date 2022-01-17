<?php
declare(strict_types = 1);

namespace App\Controller\API;

use App\Contract\Response\APIResponseServiceInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

class AbsractAPIController extends AbstractController
{
    private APIResponseServiceInterface $responseService;

    public function setAPIResponseService(APIResponseServiceInterface $responseService): void
    {
        $this->responseService = $responseService;
    }

    protected function createSuccessResponse($data): JsonResponse
    {
        return $this->responseService->createSuccessResponse($data);
    }
}
