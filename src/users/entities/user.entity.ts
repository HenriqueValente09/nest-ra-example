import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { UserType } from './userType.entity';
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column({
      unique: true,
    })
    email: string;
  
    @ManyToOne(() => UserType)
    userType: UserType;
  
    @Column()
    isActive: boolean;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }