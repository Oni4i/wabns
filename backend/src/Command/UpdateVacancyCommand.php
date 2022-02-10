<?php
declare(strict_types = 1);

namespace App\Command;

use App\MessageBus\Message\UpdateVacancy;
use App\Service\Entity\TrackService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Messenger\MessageBusInterface;

class UpdateVacancyCommand extends Command
{
    protected static $defaultName = 'vacancy:update';

    private TrackService        $trackService;
    private MessageBusInterface $messageBus;

    public function __construct(
        TrackService $trackService,
        MessageBusInterface $messageBus
    )
    {
        parent::__construct();

        $this->trackService = $trackService;
        $this->messageBus = $messageBus;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Начал собирать отслеживания для обновления...');

        $tracks = $this->trackService->findAllForUpdate();

        $output->writeln(sprintf('Нашёл %s отслеживаний для обновления', count($tracks)));

        foreach ($tracks as $track) {
            $this->messageBus->dispatch(new UpdateVacancy($track));
        }

        return Command::SUCCESS;
    }
}
