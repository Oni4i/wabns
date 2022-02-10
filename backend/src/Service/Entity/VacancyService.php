<?php
declare(strict_types = 1);

namespace App\Service\Entity;

use App\Entity\TrackOperation;
use App\Entity\Vacancy;
use Doctrine\ORM\EntityManagerInterface;

class VacancyService
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function saveVacanciesAfterUpdate(array $vacancies): void
    {
        $trackOperation = new TrackOperation();

        foreach ($vacancies as $vacancy) {
            $entity = new Vacancy();

            $entity
                ->setDescription($vacancy['description'])
                ->setTitle($vacancy['title'])
                ->setCompany($vacancy['company'])
//                ->setSalary($vacancy['salary'])
                ->setTrackOperation($trackOperation);

            $this->entityManager->persist($entity);
        }

        $this->entityManager->flush();
    }
}
