<?php
declare(strict_types = 1);

namespace App\DTO\Response;

class WorkServiceResponseDTO extends AbstractResponseDTO
{
    public int $id;
    public string $alias;
    public string $title;
    public ?string $description = null;
    public string $url;
    public string $service;

    public function setId(int $id): WorkServiceResponseDTO
    {
        $this->id = $id;

        return $this;
    }

    public function setAlias(string $alias): WorkServiceResponseDTO
    {
        $this->alias = $alias;

        return $this;
    }

    public function setTitle(string $title): WorkServiceResponseDTO
    {
        $this->title = $title;

        return $this;
    }

    public function setDescription(?string $description): WorkServiceResponseDTO
    {
        $this->description = $description;

        return $this;
    }

    public function setUrl(string $url): WorkServiceResponseDTO
    {
        $this->url = $url;

        return $this;
    }

    public function setService(string $service): WorkServiceResponseDTO
    {
        $this->service = $service;

        return $this;
    }
}
