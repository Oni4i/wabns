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
        $url = $track->getWorkService()->getUrl();

        $query = new QueryParams();

        $query
            ->setUrl($url)
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

    public static function getAlias(): string
    {
        return 'hh';
    }
}
