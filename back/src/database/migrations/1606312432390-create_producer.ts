import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProducer1606312432390 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "producer",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "grain_type",
            type: "varchar",
          },
          {
            name: "user_id",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "ProducerUser",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("producer");
  }
}
