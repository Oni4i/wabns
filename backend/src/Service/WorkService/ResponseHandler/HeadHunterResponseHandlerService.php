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
                return [
                    'title' => $node->filter('a[data-qa="vacancy-serp__vacancy-title"]')->text(''),
                    'salary' => $node->filter('span[data-qa="vacancy-serp__vacancy-compensation"]')->text(''),
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

    public static function getAlias(): string
    {
        return 'hh';
    }
}
