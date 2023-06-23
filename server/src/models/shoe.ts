import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Shoe extends BaseEntity {
  @PrimaryGeneratedColumn()
  shoe_id: number;

  @Column()
  shoe_name: string;

  @Column()
  shoe_price: number;

  @Column()
  color: string;

  @Column()
  size: number;

  @Column()
  type: string;

  @Column()
  style: string;

  @Column()
  brand: string;
}