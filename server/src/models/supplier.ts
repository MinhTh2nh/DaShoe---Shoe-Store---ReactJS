import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Supplier extends BaseEntity {
  @PrimaryGeneratedColumn()
  supplier_id: number;

  @Column()
  supplier_name: string;

  @Column()
  supplier_phone: string;

  @Column()
  tax_code: string;

  @Column()
  supplier_address: string;

  @Column()
  bank_account: string;

  @Column()
  supplier_email: string;
}