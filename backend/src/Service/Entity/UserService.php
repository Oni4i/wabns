<?php
declare(strict_types = 1);

namespace App\Service\Entity;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserService
{
    private EntityManagerInterface      $entityManager;
    private UserPasswordHasherInterface $userPasswordHasher;
    private UserRepository              $userRepository;

    public function __construct(
        EntityManagerInterface $entityManager,
        UserPasswordHasherInterface $userPasswordHasher,
        UserRepository $userRepository
    )
    {
        $this->entityManager = $entityManager;
        $this->userPasswordHasher = $userPasswordHasher;
        $this->userRepository = $userRepository;
    }

    public function setHashedPassword(User $user, string $password): void
    {
        $hashedPassword = $this->userPasswordHasher->hashPassword($user, $password);
        $user->setPassword($hashedPassword);
    }

    public function authUserByRequest(Request $request): ?User
    {
        $email = $request->request->get('email');
        $password = $request->request->get('password');

        $user = $this->userRepository->findOneBy(['email' => $email]);

        if (null !== $user && $this->userPasswordHasher->isPasswordValid($user, $password)) {

        }

        return $user;
    }

    public function findUserByEmail(string $email): ?User
    {
        return $this->userRepository->findOneBy(['email' => $email]);
    }

    public function findUserByToken(string $token): ?User
    {
        return $this->userRepository->findOneBy(['apiToken' => $token]);
    }

    public function save(User $user): void
    {
        $this->entityManager->persist($user);
        $this->entityManager->flush();
    }
}
