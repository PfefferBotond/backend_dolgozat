/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import ProfileData from './ProfileData.entity';

@Entity()
export default class ProfileData {
  @PrimaryGeneratedColumn()
  ProfileId: number;

  @Column()
  firstname: string;
  
  @Column()
  secondname: string;

  @Column()
  email: string;

  @Column()
  birthDate: number;

  @Column()
  passworld: string;

  @Column()
  passwolrdAgain: string;
  static birthDate: any;

}
