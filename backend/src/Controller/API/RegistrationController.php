<?php
declare(strict_types = 1);

namespace App\Controller\API;

use App\DTO\Request\UserRequestDTO;
use App\Form\RegisterUserFormType;
use App\Service\API\UserRequestService;
use App\Service\Entity\UserService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/register")
 */
class RegistrationController extends AbstractAPIController
{
    private UserRequestService $requestService;
    private UserService        $userService;

    public function __construct(
        UserRequestService $requestService,
        UserService $userService
    )
    {
        $this->requestService = $requestService;
        $this->userService = $userService;
    }

    /**
     * @Route("/", methods={"POST", "OPTIONS"})
     */
    public function index(Request $request): JsonResponse
    {
        $form = $this->createForm(RegisterUserFormType::class, new UserRequestDTO());

        dd($this->getUser());
        $form->submit($request->request->all());

        if ($form->isValid()) {
            $user = $this->requestService->getEntityFromDTO($form->getData());
            $this->userService->setHashedPassword($user, $form->getData()->getPassword());

            $this->userService->save($user);

            return $this->createSuccessResponse('Регистрация прошла успешно');
        }

        return $this->createErrorResponseWithFields(
            'Возникли ошибки при регистрации',
            $this->getFormErrors($form)
        );
    }
}
