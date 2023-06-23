import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { BookEntry, Shoe } from "@/models";
import type { Relation } from "typeorm";

@Entity()
export class BookEntryDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  book_entry_detail_id: number;

  @OneToOne(() => Shoe, (shoe) => shoe.shoe_id)
  @JoinColumn()
  shoe_id: Relation<Shoe>;

  @OneToMany(() => BookEntry, (bookEntry) => bookEntry.bookentry_id)
  bookentry_id: Relation<BookEntry>;

  @Column()
  quantity: number;

  @Column()
  import_unit_price: string;
}