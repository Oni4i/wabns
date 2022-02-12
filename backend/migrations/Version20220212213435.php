<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220212213435 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE track_operation ADD track_id INT NOT NULL');
        $this->addSql('ALTER TABLE track_operation ADD CONSTRAINT FK_183908995ED23C43 FOREIGN KEY (track_id) REFERENCES track (id)');
        $this->addSql('CREATE INDEX IDX_183908995ED23C43 ON track_operation (track_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE track_operation DROP FOREIGN KEY FK_183908995ED23C43');
        $this->addSql('DROP INDEX IDX_183908995ED23C43 ON track_operation');
        $this->addSql('ALTER TABLE track_operation DROP track_id');
    }
}
