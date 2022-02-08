<?php
declare(strict_types = 1);

namespace App\Service\WorkService\ResponseHandler;

use App\Contract\WorkService\ResponseHandlerServiceInterface;
use Symfony\Contracts\HttpClient\ResponseInterface;

class HeadHunterResponseHandlerService implements ResponseHandlerServiceInterface
{
    public function __invoke(ResponseInterface $response): array
    {
        dd($response->getContent());
    }

    public static function getAlias(): string
    {
        return 'hh';
    }
}
