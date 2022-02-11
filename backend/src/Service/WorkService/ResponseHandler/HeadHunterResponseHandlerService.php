<?php
declare(strict_types = 1);

namespace App\Service\WorkService\ResponseHandler;

use App\Contract\WorkService\ResponseHandlerServiceInterface;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Contracts\HttpClient\ResponseInterface;

class HeadHunterResponseHandlerService implements ResponseHandlerServiceInterface
{
    public function getProcessedData(ResponseInterface $response): array
    {
        $html = $response->getContent(false);

        return (new Crawler($html))
            ->filter('div.vacancy-serp-item')
            ->each(function (Crawler $node, $i) {
                [$salary, $currency] = $this->getSalaryAndCurrency($node);

                return [
                    'title' => $node->filter('a[data-qa="vacancy-serp__vacancy-title"]')->text(''),
                    'salary' => $salary,
                    'currency' => $currency,
                    'company' => $node->filter('a[data-qa="vacancy-serp__vacancy-employer"]')->text(''),
                    'description' => $node->filter('div.g-user-content')->text('')
                ];
            });
    }

    public function isLastPage(ResponseInterface $response): bool
    {
        $html = $response->getContent(false);
        $crawler = new Crawler($html);

        $isLast = true;

        foreach ($crawler->filter('a.bloko-button span') as $item) {
            if ($item->textContent === 'дальше') {
                $isLast = false;
                break;
            }
        }

        return $isLast;
    }

    private function getSalaryAndCurrency(Crawler $item): ?array
    {
        $salaryBlock = $item->filter('span[data-qa="vacancy-serp__vacancy-compensation"]');

        $text = $salaryBlock->text('');

        if (!$text) return null;

        $text = preg_replace('/\s/u', '', $text);

        $salaryRange = preg_split('/–/u', $text);
        $salaryRange = preg_replace('/[^0-9]/u', '', $salaryRange);

        $salary = (int) $salaryRange[0];

        if (count($salaryRange) === 2) {
            $salary = ($salary + (int) $salaryRange[1]) / 2;
        }

        return [
            $salary,
            $this->getCurrency($text)
        ];
    }

    private function getCurrency(string $salaryText): ?string
    {
        $currency = '';

        for ($i = strlen($salaryText); $i >= 0; $i--) {
            $char = mb_substr($salaryText, $i, 1);

            if (is_numeric($char)) break;

            if ($char) {
                $currency = $char . $currency;
            }
        }

        return $currency ?? null;
    }

    public static function getAlias(): string
    {
        return 'hh';
    }
}
