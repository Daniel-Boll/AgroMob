import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import User from "./User";

@Entity("producer")
export default class Producer {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  grain_type: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;
}
