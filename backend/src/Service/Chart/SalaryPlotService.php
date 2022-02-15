<?php
declare(strict_types = 1);

namespace App\Service\Chart;

use App\Entity\Track;
use App\Entity\Vacancy;
use App\Service\Entity\VacancyService;
use Symfony\Component\HttpFoundation\Request;

class SalaryPlotService extends AbstractChartService
{
    private VacancyService $vacancyService;

    public function __construct(
        VacancyService $vacancyService
    )
    {
        $this->vacancyService = $vacancyService;
    }

    public function getPlotData(Request $request, Track $track): array
    {
        $from = new \DateTimeImmutable($request->query->get('from'));
        $to = new \DateTimeImmutable($request->query->get('to'));

        /** @var Vacancy[] $vacancies */
        $vacancies = $this->vacancyService->findAllForSalaryCalculation(
            $track->getId(),
            'RUB',
            $from,
            $to
        );

        $dateRange = $this->getDateRange($from, $to, $track);

        return [
            'trackId' => $track->getId(),
            'labels' => array_keys($dateRange),
            'salaries' => [
                [
                    'dataLabel' => 'Средняя зарплата',
                    'data' => $this->getAverageSalaryData($vacancies, $dateRange)
                ],
                [
                    'dataLabel' => 'Минимальная зарплата',
                    'data' => $this->getMinSalaryData($vacancies, $dateRange)
                ],
                [
                    'dataLabel' => 'Максимальная зарплата',
                    'data' => $this->getMaxSalaryData($vacancies, $dateRange)
                ],
                [
                    'dataLabel' => 'Медианная запралата',
                    'data' => $this->getMedianSalaryData($vacancies, $dateRange)
                ]
            ]
        ];
    }

    private function getAverageSalaryData(array $vacancies, array $dateRange): array
    {
        $result = $dateRange;

        $tmp = [];

        foreach ($vacancies as $vacancy) {
            $createdDate = $vacancy->getTrackOperation()->getCreatedAt()->format('Y-m-d');

            if (!isset($tmp[$createdDate])) {
                $tmp[$createdDate] = [];
                $tmp[$createdDate]['sum'] = 0;
                $tmp[$createdDate]['count'] = 0;
            }

            $tmp[$createdDate]['sum'] += $vacancy->getSalary();
            $tmp[$createdDate]['count']++;
        }

        foreach ($tmp as $key => $value) {
            $result[$key] = round($value['sum'] / $value['count'], 2);
        }

        return $result;
    }

    private function getMinSalaryData(array $vacancies, array $dateRange): array
    {
        $result = $dateRange;

        foreach ($vacancies as $vacancy) {
            $createdDate = $vacancy->getTrackOperation()->getCreatedAt()->format('Y-m-d');

            if ($result[$createdDate] === 0) {
                $result[$createdDate] = $vacancy->getSalary();

                continue;
            }

            $result[$createdDate] = min([$result[$createdDate], $vacancy->getSalary()]);
        }

        return $result;
    }

    private function getMaxSalaryData(array $vacancies, array $dateRange): array
    {
        $result = $dateRange;

        foreach ($vacancies as $vacancy) {
            $createdDate = $vacancy->getTrackOperation()->getCreatedAt()->format('Y-m-d');

            if ($result[$createdDate] === 0) {
                $result[$createdDate] = $vacancy->getSalary();

                continue;
            }

            $result[$createdDate] = max([$result[$createdDate], $vacancy->getSalary()]);
        }

        return $result;
    }

    private function getMedianSalaryData(array $vacancies, array $dateRange): array
    {
        $result = $dateRange;

        $tmp = [];

        foreach ($vacancies as $vacancy) {
            $createdDate = $vacancy->getTrackOperation()->getCreatedAt()->format('Y-m-d');

            if (!isset($tmp[$createdDate])) {
                $tmp[$createdDate] = [];
            }

            $tmp[$createdDate][] = $vacancy->getSalary();
        }

        foreach ($tmp as $key => $value) {
            sort($value, SORT_NUMERIC);

            $length = count($value);
            $index = ceil($length / 2);

            $sum = $value[$index];

            if ($length % 2 === 0) {
                $sum += $value[$index + 1];
            }

            $result[$key] = $sum;
        }

        return $result;
    }
}
