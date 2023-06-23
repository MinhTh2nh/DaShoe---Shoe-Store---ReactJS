import {
  BaseEntity,
  Entity,
  Column,
  PrimaryColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Customer, Employee } from "@/models";
import type { Relation } from "typeorm";

@Entity()
export class Account extends BaseEntity {
  @PrimaryColumn()
  username: string;

  @Column()
  password: string;

  @OneToOne(() => Employee, (employee) => employee.employee_id)
  @JoinColumn()
  employee_id: Relation<Employee>;

  @OneToOne(() => Customer, (customer) => customer.customer_id)
  @JoinColumn()
  customer: Relation<Customer>;
}