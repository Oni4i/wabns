<?php
declare(strict_types = 1);

namespace App\Service\WorkService;

use App\Contract\WorkService\QueryParamsInterface;
use App\Contract\WorkService\ResponseHandlerServiceInterface;
use App\Contract\WorkService\WorkQueryInterface;
use App\Entity\Track;
use Psr\Container\ContainerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Contracts\HttpClient\ResponseInterface;

abstract class AbstractRequestWorkService
{
    private HttpClientInterface $client;
    private ContainerInterface  $queryContainer;
    private ContainerInterface  $responseContainer;

    public function setClient(HttpClientInterface $client): void
    {
        $this->client = $client;
    }

    public function setQueryContainer(ContainerInterface $queryContainer): void
    {
        $this->queryContainer = $queryContainer;
    }

    public function setResponseContainer(ContainerInterface $responseContainer): void
    {
        $this->responseContainer = $responseContainer;
    }

    protected function getClient(): HttpClientInterface
    {
        return $this->client;
    }

    protected function getQuery(): WorkQueryInterface
    {
        return $this->queryContainer->get($this->getAlias());
    }

    protected function getResponseHandler(): ResponseHandlerServiceInterface
    {
        return $this->responseContainer->get($this->getAlias());
    }

    protected function makeRequest(QueryParamsInterface $queryParams): ResponseInterface
    {
        return $this->getClient()->request($queryParams->getMethod(), $queryParams->getUrl(), $queryParams->getOptions());
    }

    protected function handleAll(Track $track): array
    {
        $params = $this->getQuery()->getParamsByTrack($track);

        $request = $this->makeRequest($params);

        $results = [];

        $isLastProcessed = false;

        while (!$this->getResponseHandler()->isLastPage($request) || !$isLastProcessed) {
            $request = $this->makeRequest($params);
            $results = \array_merge($results, $this->getResponseHandler()->getProcessedData($request));

            if ($this->getResponseHandler()->isLastPage($request)) {
                $isLastProcessed = true;
            }

            $params = $this->getQuery()->getNextPage($params);
        }

        return $results;
    }

    abstract protected function getAlias(): string;
}
