<?php
declare(strict_types = 1);

namespace App\Controller\API;

use App\DTO\Request\AuthUserRequestDTO;
use App\Form\AuthUserFormType;
use App\Service\Entity\UserService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

/**
 * @Route("/api/auth")
 */
class AuthController extends AbstractAPIController
{
    private UserService                 $userService;
    private UserPasswordHasherInterface $userPasswordHasher;
    private TokenGeneratorInterface     $tokenGenerator;

    public function __construct(
        UserService $userService,
        UserPasswordHasherInterface $userPasswordHasher,
        TokenGeneratorInterface $tokenGenerator
    )
    {
        $this->userService = $userService;
        $this->userPasswordHasher = $userPasswordHasher;
        $this->tokenGenerator = $tokenGenerator;
    }

    /**
     * @Route("/")
     */
    public function index(Request $request): JsonResponse
    {
        $form = $this->createForm(AuthUserFormType::class);

        $form->submit($request->request->all());

        if ($form->isValid()) {
            /** @var AuthUserRequestDTO $formData */
            $formData = $form->getData();

            $user = $this->userService->findUserByEmail($formData->getEmail());

            if (null === $user) {
                return $this->createNotFoundErrorResponse('Пользователь с такой почтой не найден');
            }

            if ($this->userPasswordHasher->isPasswordValid($user, $formData->getPassword())) {
                $token = $this->tokenGenerator->generateToken();

                $user->setApiToken($token);
                $this->userService->save($user);

                return $this->createSuccessResponse([
                    'apiToken' => $token,
                ]);
            }

            return $this->createErrorResonse('Неверный логин и/или пароль');
        }

        return $this->createErrorResponseWithFields(
            'При авторизации произошла ошибка',
            $this->getFormErrors($form)
        );
    }

    /**
     * @Route("/check-token")
     */
    public function checkToken(Request $request): JsonResponse
    {
        $token = $request->headers->get('X-AUTH-TOKEN');

        if (!$token) {
            return $this->createErrorResonse('Токен не может быть пустым');
        }

        $user = $this->userService->findUserByToken($token);

        if (!$user) {
            return $this->createErrorResonse('Неверный токен');
        }

        return $this->createSuccessResponse('Токен активен');
    }
}
