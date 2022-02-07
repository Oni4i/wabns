<?php
declare(strict_types = 1);

namespace App\Form;

use App\Entity\WorkService;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

class TrackFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('delayUnit', NumberType::class)
            ->add('delayCount', NumberType::class)
            ->add('query', TextType::class)
            ->add('isActive', CheckboxType::class, [
                'false_values' => ['false', null, 0],
            ])
            ->add('workService', EntityType::class, [
                'class' => WorkService::class,
            ]);
    }
}
