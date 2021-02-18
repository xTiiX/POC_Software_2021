import {
  BaseEntity, Column, Entity, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class Developer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string | undefined;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  school: string;

  @Column()
  experience: number;

  constructor(name: string, age: number, school: string, experience: number) {
    super();
    this.name = name;
    this.age = age;
    this.school = school;
    this.experience = experience;
  }
}
