<?php
declare(strict_types = 1);

namespace App\Query;

use App\Contract\WorkService\QueryParamsInterface;

class QueryParams implements QueryParamsInterface
{
    private string $method = 'GET';
    private string $url;
    private array $options = [];

    public function getMethod(): string
    {
        return $this->method;
    }

    public function setMethod(string $method): QueryParams
    {
        $this->method = $method;

        return $this;
    }

    public function getUrl(): string
    {
        return $this->url;
    }

    public function setUrl(string $url): QueryParams
    {
        $this->url = $url;

        return $this;
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function setOptions(array $options): QueryParams
    {
        $this->options = $options;

        return $this;
    }
}
