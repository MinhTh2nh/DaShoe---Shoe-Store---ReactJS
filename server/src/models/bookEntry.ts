import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Employee, Supplier } from "@/models";
import type { Relation } from "typeorm"

@Entity()
export class BookEntry extends BaseEntity {
  @PrimaryGeneratedColumn()
  bookentry_id: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.supplier_id)
  @JoinColumn()
  supplier_id: Relation<Supplier>;

  @ManyToOne(() => Employee, (employee) => employee.employee_id)
  @JoinColumn()
  employee_id: Relation<Employee>;

  @Column()
  bookentry_date: string;

  @Column()
  total: number;
}