<?php
declare(strict_types = 1);

namespace App\MessageBus\MessageHandler;

use App\Entity\Track;
use App\Entity\TrackOperation;
use App\MessageBus\Message\UpdateVacancy;
use App\Service\Entity\VacancyService;
use App\Service\WorkService\AbstractRequestWorkService;
use Psr\Container\ContainerInterface;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class UpdateVacancyHandler implements MessageHandlerInterface
{
    private ContainerInterface $requestLocator;
    private VacancyService     $vacancyService;

    public function __construct(
        ContainerInterface $requestLocator,
        VacancyService $vacancyService
    )
    {
        $this->requestLocator = $requestLocator;
        $this->vacancyService = $vacancyService;
    }

    public function __invoke(UpdateVacancy $message): void
    {
        $track = $message->getTrack();

        $vacancies = $this->getRequestService($message->getAlias())->updateVacancies($track);

        $this->vacancyService->saveVacanciesAfterUpdate($vacancies);
    }

    private function getRequestService(string $alias): AbstractRequestWorkService
    {
        return $this->requestLocator->get($alias);
    }
}
