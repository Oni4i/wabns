<?php
declare(strict_types = 1);

namespace App\Service\Chart;

use App\Entity\Track;
use App\Entity\Vacancy;
use App\Service\Entity\TrackService;
use App\Service\Entity\VacancyService;
use Symfony\Component\HttpFoundation\Request;

class VacancyPlotService extends AbstractChartService
{
    private TrackService   $trackService;
    private VacancyService $vacancyService;

    public function __construct(
        TrackService $trackService,
        VacancyService $vacancyService
    )
    {
        $this->trackService = $trackService;
        $this->vacancyService = $vacancyService;
    }

    public function getPlotData(Request $request, Track $track): array
    {
        $from = new \DateTimeImmutable($request->query->get('from'));
        $to = new \DateTimeImmutable($request->query->get('to'));

        $vacancies = $this->vacancyService->findAllByTrackAndDate(
            $track->getId(),
            $from,
            $to
        );

        $dateRange = $this->getDateRange($from, $to, $track);

        return [
            'trackId' => $track->getId(),
            'labels' => array_keys($dateRange),
            'dataLabel' => 'Количество вакансий',
            'data' => $this->getData($vacancies, $dateRange),
        ];
    }

    private function getData(array $vacancies, array $dateRange): array
    {
        $result = $dateRange;

        /** @var Vacancy $vacancy */
        foreach ($vacancies as $vacancy) {
            $result[$vacancy->getTrackOperation()->getCreatedAt()->format('Y-m-d')]++;
        }

        return $result;
    }
}
