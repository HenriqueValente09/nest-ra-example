import {
    BeforeInsert,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
  } from 'typeorm';
  import slugify from 'slugify';
  import { ApiProperty } from '@nestjs/swagger';
  import {IsNotEmpty} from "class-validator";
  
  @Entity()
  export class UserType {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ApiProperty()
    @Column({
      unique: true,
    })
    name: string;
  
    @Column()
    slug: string;
  
    @BeforeInsert()
    createSlug() {
      this.slug = slugify(this.name, {
        lower: true,
        strict: true,
      });
    }
  }