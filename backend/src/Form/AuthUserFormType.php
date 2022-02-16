<?php
declare(strict_types = 1);

namespace App\Form;

use App\DTO\Request\AuthUserRequestDTO;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class AuthUserFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $constraints = [
            new NotBlank([
                'allowNull' => false,
            ])
        ];

        $builder
            ->add('email', EmailType::class, [
                'constraints' => $constraints
            ])
            ->add('password', TextType::class, [
                'constraints' => $constraints
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => AuthUserRequestDTO::class,
        ]);
    }
}
