<?php
declare(strict_types = 1);

namespace App\EventListener\OnKernelRequest;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\RequestEvent;

class OptionMethodListener
{
    public function onKernelRequest(RequestEvent $requestEvent): void
    {
        if ($this->isApi($requestEvent->getRequest()) && $requestEvent->getRequest()->getMethod() === 'OPTIONS') {
            $requestEvent->setResponse(new JsonResponse([]));
        }
    }

    private function isApi(Request $request): bool
    {
        $path = explode('/', $request->getPathInfo())[1];

        return $path === 'api';
    }
}
