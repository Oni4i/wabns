<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220128034854 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE track (id INT AUTO_INCREMENT NOT NULL, work_service_id INT DEFAULT NULL, delay_unit NUMERIC(1, 0) NOT NULL, delay_count NUMERIC(10, 0) NOT NULL, query VARCHAR(255) NOT NULL, is_active TINYINT(1) NOT NULL, filters JSON DEFAULT NULL, next_start DATE NOT NULL, last_start DATE NOT NULL, INDEX IDX_D6E3F8A6F63F0435 (work_service_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE track_log (id INT AUTO_INCREMENT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE vacancy (id INT AUTO_INCREMENT NOT NULL, track_log_id INT NOT NULL, title VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, salary NUMERIC(10, 0) DEFAULT NULL, company VARCHAR(255) NOT NULL, INDEX IDX_A9346CBDA2A59C6F (track_log_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE work_service (id INT AUTO_INCREMENT NOT NULL, alias VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, url VARCHAR(255) NOT NULL, service VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE track ADD CONSTRAINT FK_D6E3F8A6F63F0435 FOREIGN KEY (work_service_id) REFERENCES work_service (id)');
        $this->addSql('ALTER TABLE vacancy ADD CONSTRAINT FK_A9346CBDA2A59C6F FOREIGN KEY (track_log_id) REFERENCES track_log (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE vacancy DROP FOREIGN KEY FK_A9346CBDA2A59C6F');
        $this->addSql('ALTER TABLE track DROP FOREIGN KEY FK_D6E3F8A6F63F0435');
        $this->addSql('DROP TABLE track');
        $this->addSql('DROP TABLE track_log');
        $this->addSql('DROP TABLE vacancy');
        $this->addSql('DROP TABLE work_service');
    }
}
