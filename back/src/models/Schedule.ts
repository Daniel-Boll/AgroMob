import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import Producer from "./Producer";
import Transporter from "./Transporter";

@Entity("schedule")
export default class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @OneToOne(() => Producer)
  @JoinColumn({ name: "producer_id" })
  producer: Producer;

  @OneToOne(() => Transporter)
  @JoinColumn({ name: "transporter_id" })
  transporter: Transporter;

  @Column()
  start: string;

  @Column()
  end: string;

  @Column()
  unload_location: string;

  @Column()
  load_location: string;
}
