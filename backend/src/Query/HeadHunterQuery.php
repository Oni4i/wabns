<?php
declare(strict_types = 1);

namespace App\Query;

use App\Contract\WorkService\QueryParamsInterface;
use App\Contract\WorkService\WorkQueryInterface;
use App\Entity\Track;

class HeadHunterQuery implements WorkQueryInterface
{
    public function getParamsByTrack(Track $track): QueryParamsInterface
    {
        $query = new QueryParams();

        $query
            ->setUrl($this->generateFinishUrl($track))
            ->setMethod('GET')
            ->setOptions([]);

        return $query;
    }

    public function getNextPage(QueryParamsInterface $queryParams): QueryParamsInterface
    {
        $params = [];

        parse_str(parse_url($queryParams->getUrl(), PHP_URL_QUERY), $params);

        if (!isset($params['page'])) {
            $params['page'] = 0;
        }

        ++$params['page'];

        return $queryParams->setUrl(http_build_url($queryParams->getUrl(), ['query' => http_build_query($params)]));
    }

    private function generateFinishUrl(Track $track): string
    {
        $serviceUrl = $track->getWorkService()->getUrl();

        $this->setQuery($serviceUrl, $track->getQuery());

        return $serviceUrl;
    }

    private function setQuery(string &$url, string $query): void
    {
        $params = [];

        $urlQuery = parse_url($url, PHP_URL_QUERY);

        if ($urlQuery) {
            parse_str($urlQuery, $params);
        }

        $params['text'] = $query;

        $url = http_build_url($url, ['query' => http_build_query($params)]);
    }

    public static function getAlias(): string
    {
        return 'hh';
    }
}
