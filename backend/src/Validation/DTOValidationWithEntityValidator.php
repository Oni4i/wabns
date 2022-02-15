<?php
declare(strict_types = 1);

namespace App\Validation;

use App\Contract\DTO\DTOEntityInterface;
use App\Contract\Validation\ValidationServiceInterface;
use Psr\Container\ContainerInterface;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\ConstraintDefinitionException;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class DTOValidationWithEntityValidator extends ConstraintValidator
{
    private ValidatorInterface $validator;
    private ContainerInterface $services;

    public function __construct(ValidatorInterface $validator, ContainerInterface $services)
    {
        $this->validator = $validator;
        $this->services = $services;
    }

    public function validate(mixed $value, Constraint $constraint)
    {
        if (!$constraint instanceof DTOValidationWithEntity) {
            throw new UnexpectedTypeException($constraint, DTOValidationWithEntity::class);
        }

        if (!$value instanceof DTOEntityInterface) {
            throw new UnexpectedTypeException($value, DTOEntityInterface::class);
        }

        $entityDtoSetter = $this->getService(get_class($value));
        $entity = $entityDtoSetter->getEntityFromDTO($value);

        $validationResult = $this->validator->validate($entity);
        if (!$validationResult->count()) {
            return;
        }

        foreach ($validationResult as $violation) {
            $this->context
                ->buildViolation($violation->getMessage())
                ->atPath($violation->getPropertyPath())
                ->addViolation();
        }
    }

    private function getService(string $DTO): ValidationServiceInterface
    {
        if (!$this->services->has($DTO)) {
            throw new ConstraintDefinitionException(
                sprintf('Can\' find service for "%s".', $DTO)
            );
        }
        return $this->services->get($DTO);
    }
}
