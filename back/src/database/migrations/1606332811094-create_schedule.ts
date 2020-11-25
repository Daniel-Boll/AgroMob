import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createSchedule1606332811094 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "schedule",
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
            name: "producer_id",
            type: "integer",
          },
          {
            name: "transporter_id",
            type: "integer",
            isNullable: true,
          },
          {
            name: "start",
            type: "varchar",
          },
          {
            name: "end",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "unload_location",
            type: "varchar",
          },
          {
            name: "load_location",
            type: "varchar",
          },
        ],
        foreignKeys: [
          {
            name: "ScheduleProducer",
            columnNames: ["producer_id"],
            referencedTableName: "producer",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
          {
            name: "ScheduleTransporter",
            columnNames: ["transporter_id"],
            referencedTableName: "transporter",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("schedule");
  }
}
