<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220206223656 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Rename table track_log to track_operation';
    }

    public function up(Schema $schema): void
    {
        $this->addSql("RENAME TABLE `track_log` TO `track_operation`");
    }

    public function down(Schema $schema): void
    {
       $this->addSql("RENAME TABLE `track_operation` TO `track_log`");
    }
}
