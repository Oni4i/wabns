<?php
declare(strict_types = 1);

namespace App\Contract\WorkService;

interface QueryParamsInterface
{
    public function getMethod(): string;
    public function getUrl(): string;
    public function getOptions(): array;
    public function setMethod(string $method): self;
    public function setUrl(string $url): self;
    public function setOptions(array $options): self;
}
