<?php
declare(strict_types = 1);

namespace App\Service\Entity;

use App\Repository\ProtectedControllerRepository;
use Symfony\Component\HttpFoundation\Request;
use function Symfony\Component\DependencyInjection\Loader\Configurator\expr;

class ProtectedControllerService
{
    private ProtectedControllerRepository $controllerRepository;

    public function __construct(
        ProtectedControllerRepository $controllerRepository
    )
    {
        $this->controllerRepository = $controllerRepository;
    }

    public function isControllerProtected(Request $request): bool
    {
        $controllerName = $this->getControllerNameByRequest($request);

        $controller = $this->controllerRepository->findOneBy(['classname' => $controllerName]);

        return (bool) $controller;
    }

    private function getControllerNameByRequest(Request $request): string
    {
        $controllerWithAction = $request->attributes->get('_controller');
        $controller = explode('::', $controllerWithAction);

        return $controller[0];
    }
}
