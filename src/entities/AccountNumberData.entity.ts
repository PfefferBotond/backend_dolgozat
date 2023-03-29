import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import AccountNumberData from './AccountNumberData.entity';

@Entity()
export default class AccountNumberData {
  @PrimaryGeneratedColumn()
  accountId: number;

  @Column()
  name: string;

  @Column()
  accountnumber: string;

}
