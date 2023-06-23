import {
  BaseEntity,
  Entity,
  Column,
  PrimaryColumn,
  JoinColumn,
  OneToOne,
  OneToMany, PrimaryGeneratedColumn,
} from "typeorm";
import { Customer, Invoice } from "@/models";
import type { Relation } from "typeorm";

@Entity()
export class InvoiceDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  invoice_detail_id: number;

  @OneToOne(() => Invoice, (invoice) => invoice.invoice_id)
  @JoinColumn()
  invoice: Relation<Invoice>;

  @OneToMany(() => Customer, (customer) => customer.customer_id)
  customer: Relation<Customer>;

  @Column()
  date: string;

  @Column()
  quantity: number;

  @Column()
  unit_price: string;
}