import { BaseEntity, Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  customer_name: string;

  @Column()
  customer_dob: string;

  @Column()
  customer_address: string;

  @Column()
  customer_city: string;

  @PrimaryColumn()
  customer_phone: string;

  @PrimaryColumn()
  customer_email: string;

  @Column()
  customer_gender: string;
}