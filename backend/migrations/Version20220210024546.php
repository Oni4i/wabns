<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220210024546 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Rename track_log to track_operation';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE `vacancy` RENAME COLUMN `track_log_id` TO `track_operation_id`');

    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
