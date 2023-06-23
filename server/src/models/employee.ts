import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  employee_id: number;

  @Column()
  employee_name: string;

  @Column()
  employee_email: string;

  @Column()
  employee_dob: string;

  @Column()
  employee_city: string;

  @Column()
  employee_address: string;

  @Column()
  employee_phone: string;

  @Column()
  working_hours: number;

  @Column()
  position: string;

  @Column()
  contract_expiry_date: string;
}