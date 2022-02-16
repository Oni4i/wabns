<?php
declare(strict_types = 1);

namespace App\Security;

use App\Contract\Response\APIResponseServiceInterface;
use App\Service\Entity\ProtectedControllerService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;

class ApiKeyAuthenticator extends AbstractAuthenticator
{
    private APIResponseServiceInterface $responseService;

    private ProtectedControllerService  $protectedControllerService;

    public function __construct(
        APIResponseServiceInterface $responseService,
        ProtectedControllerService $protectedControllerService
    )
    {
        $this->responseService = $responseService;
        $this->protectedControllerService = $protectedControllerService;
    }

    public function supports(Request $request): ?bool
    {
        return $this->protectedControllerService->isControllerProtected($request);
    }

    public function authenticate(Request $request): Passport
    {
        $apiToken = $request->headers->get('X-AUTH-TOKEN');

        if (null === $apiToken) {
            throw new CustomUserMessageAuthenticationException('No API token provided');
        }

        return new SelfValidatingPassport(new UserBadge($apiToken));
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        return null;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        return $this->responseService->createErrorResponse($exception->getMessage());
    }
}
