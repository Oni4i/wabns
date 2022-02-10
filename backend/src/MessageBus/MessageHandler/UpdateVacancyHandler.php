<?php
declare(strict_types = 1);

namespace App\MessageBus\MessageHandler;

use App\MessageBus\Message\UpdateVacancy;
use App\Service\Entity\TrackService;
use App\Service\Entity\VacancyService;
use App\Service\WorkService\AbstractRequestWorkService;
use Psr\Container\ContainerInterface;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class UpdateVacancyHandler implements MessageHandlerInterface
{
    private ContainerInterface $requestLocator;
    private VacancyService     $vacancyService;
    private TrackService       $trackService;

    public function __construct(
        ContainerInterface $requestLocator,
        VacancyService $vacancyService,
        TrackService $trackService
    )
    {
        $this->requestLocator = $requestLocator;
        $this->vacancyService = $vacancyService;
        $this->trackService = $trackService;
    }

    public function __invoke(UpdateVacancy $message): void
    {
        $track = $this->trackService->findOneById($message->getTrackId());

        $vacancies = $this->getRequestService($message->getAlias())->updateVacancies($track);

        $this->vacancyService->saveVacanciesAfterUpdate($vacancies);

        $this->trackService->updateStart($track);
    }

    private function getRequestService(string $alias): AbstractRequestWorkService
    {
        return $this->requestLocator->get($alias);
    }
}
