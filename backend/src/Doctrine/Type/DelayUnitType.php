<?php
declare(strict_types = 1);

namespace App\Doctrine\Type;

class DelayUnitType extends AbstractChoiceType
{
    public const DAY_TYPE = 1;
    public const WEEK_TYPE = 2;
    public const MONTH_TYPE = 3;
    public const YEAR_TYPE = 4;

    public const TYPES = [
        self::DAY_TYPE => 'day',
        self::WEEK_TYPE => 'week',
        self::MONTH_TYPE => 'month',
        self::YEAR_TYPE => 'year',
    ];

    public function getTypes(): array
    {
        return self::TYPES;
    }

    public function getName(): string
    {
        return 'delay_unit';
    }
}
