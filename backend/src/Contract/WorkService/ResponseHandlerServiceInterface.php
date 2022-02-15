<?php
declare(strict_types = 1);

namespace App\Contract\WorkService;

use Symfony\Contracts\HttpClient\ResponseInterface;

interface ResponseHandlerServiceInterface
{
    public function getProcessedData(ResponseInterface $response): array;
    public function isLastPage(ResponseInterface $response): bool;
}
