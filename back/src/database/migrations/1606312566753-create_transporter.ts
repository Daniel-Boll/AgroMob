import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTransporter1606312566753 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transporter",
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
            name: "legal_agreements",
            type: "varchar",
          },
          {
            name: "cnh",
            type: "varchar",
          },
          {
            name: "crlv",
            type: "varchar",
          },
          {
            name: "vehicle",
            type: "varchar",
          },
          {
            name: "price",
            type: "varchar",
          },
          {
            name: "assessments",
            type: "varchar",
          },
          {
            name: "user_id",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "TransporterUser",
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
    await queryRunner.dropTable("transporter");
  }
}
