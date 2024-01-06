import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ConsumerInformation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  details: string;

  @Column('simple-json', { nullable: true, default: {} })
  meta: Record<string, any>;
}
