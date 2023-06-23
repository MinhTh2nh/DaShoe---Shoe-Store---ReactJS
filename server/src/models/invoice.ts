import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Employee } from "@/models";
import type { Relation } from "typeorm"

@Entity()
export class Invoice extends BaseEntity {
  @PrimaryGeneratedColumn()
  invoice_id: number;

  @ManyToOne(() => Employee, (employee) => employee.employee_id)
  @JoinColumn()
  employee: Relation<Employee>;

  @Column()
  status: string;

  @Column()
  payment: string;
}