<?php
declare(strict_types = 1);

namespace App\Controller\API;

use App\Contract\Response\APIResponseServiceInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class AbstractAPIController extends AbstractController
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

    protected function createErrorResonse(string $message): JsonResponse
    {
        return $this->responseService->createErrorResponse($message);
    }

    protected function createErrorResponseWithFields(string $message, array $fields): JsonResponse
    {
        return $this->responseService->createErrorResponseWithFields($message, $fields);
    }

    protected function createNotFoundErrorResponse(string $message): JsonResponse
    {
        return $this->responseService->createNotFoundResponse($message);
    }

    protected function getFormErrors(FormInterface $form): array
    {
        $errors = [];

        foreach ($form as $child) {
            if (!$child->isValid()) {
                foreach ($child->getErrors() as $error) {
                    $errors[$child->getName()][] = $error->getMessage();
                }

                $errors[$child->getName()] = array_unique($errors[$child->getName()]);
            }
        }

        return $errors;
    }
}
