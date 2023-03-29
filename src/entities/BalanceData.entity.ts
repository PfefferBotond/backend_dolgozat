import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import BalanceData from './BalanceData.entity';

@Entity()
export default class BalanceData {
  @PrimaryGeneratedColumn()
  balanceId: number;

  @Column()
  balance: number;
}
