<?php
declare(strict_types = 1);

namespace App\Service\Entity;

use App\Entity\Track;
use App\Entity\TrackOperation;
use App\Entity\Vacancy;
use App\Repository\VacancyRepository;
use Doctrine\ORM\EntityManagerInterface;

class VacancyService
{
    private EntityManagerInterface $entityManager;
    private VacancyRepository      $vacancyRepository;

    public function __construct(
        EntityManagerInterface $entityManager,
        VacancyRepository $vacancyRepository
    )
    {
        $this->entityManager = $entityManager;
        $this->vacancyRepository = $vacancyRepository;
    }

    public function saveVacanciesAfterUpdate(array $vacancies, Track $track): void
    {
        $trackOperation = new TrackOperation();

        $trackOperation->setTrack($track);

        foreach ($vacancies as $vacancy) {
            $entity = new Vacancy();

            $entity
                ->setDescription($vacancy['description'])
                ->setTitle($vacancy['title'])
                ->setCompany($vacancy['company'])
                ->setSalary($vacancy['salary'])
                ->setCurrency($vacancy['currency'])
                ->setTrackOperation($trackOperation);

            $this->entityManager->persist($entity);
        }

        $this->entityManager->flush();
    }

    public function findAllByTrackAndDate(
        int $trackId,
        ?\DateTimeImmutable $dateFrom,
        ?\DateTimeImmutable $dateTo
    ): array
    {
        return $this->vacancyRepository->findAllByTrackAndDate(
            $trackId,
            $dateFrom?->format('Y-m-d'),
            $dateTo?->format('Y-m-d')
        );
    }
}
