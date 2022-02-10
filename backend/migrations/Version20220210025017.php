<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220210025017 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Auto-generated fix';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE track CHANGE next_start next_start DATE DEFAULT NULL');
        $this->addSql('ALTER TABLE track_operation CHANGE created_at created_at DATE NOT NULL');
        $this->addSql('ALTER TABLE vacancy CHANGE description description LONGTEXT NOT NULL');
        $this->addSql('ALTER TABLE vacancy RENAME INDEX idx_a9346cbda2a59c6f TO IDX_A9346CBD35F4457');
        $this->addSql('ALTER TABLE work_service CHANGE url url VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE track CHANGE query query VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE next_start next_start DATE NOT NULL');
        $this->addSql('ALTER TABLE track_operation CHANGE created_at created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE vacancy CHANGE title title VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE description description VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE company company VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE vacancy RENAME INDEX idx_a9346cbd35f4457 TO IDX_A9346CBDA2A59C6F');
        $this->addSql('ALTER TABLE work_service CHANGE alias alias VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE title title VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE description description LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE url url TEXT NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE service service VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
