import ProfileData from 'src/entities/AccountNumberData.entity';
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export default class Token {
  @PrimaryColumn()
  token: string;

  @ManyToOne(() => ProfileData)
  user: ProfileData;

  // Lejárati dátum
}
