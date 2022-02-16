<?php
declare(strict_types = 1);

namespace App\EventListener\OnKernelRequest;

use App\Contract\Response\APIResponseServiceInterface;
use App\Service\Entity\ProtectedControllerService;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class CSRFParameterListener
{
    private APIResponseServiceInterface $APIResponseService;
    private ProtectedControllerService  $protectedControllerService;
    private CsrfTokenManagerInterface   $csrfTokenManager;

    public function __construct(
        APIResponseServiceInterface $APIResponseService,
        ProtectedControllerService $protectedControllerService,
        CsrfTokenManagerInterface $csrfTokenManager
    )
    {
        $this->APIResponseService = $APIResponseService;
        $this->protectedControllerService = $protectedControllerService;
        $this->csrfTokenManager = $csrfTokenManager;
    }

    public function onKernelRequest(RequestEvent $requestEvent): void
    {
        $tokenId = $requestEvent->getRequest()->headers->get('X-CSRF-Token', '');

        if (
            $this->protectedControllerService->isControllerProtected()
            && !$this->csrfTokenManager->isTokenValid(new CsrfToken('auth', $tokenId))
        ) {
            $response = $this->APIResponseService->createErrorResponse('Token is invalid');
            $requestEvent->setResponse($response);
        }
    }

}
