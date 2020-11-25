import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import User from "./User";

@Entity("transporter")
export default class Transporter {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  legal_agreements: string;

  @Column()
  cnh: string;

  @Column()
  crlv: string;

  @Column()
  vehicle: string;

  @Column()
  price: string;

  @Column()
  assessments: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;
}
