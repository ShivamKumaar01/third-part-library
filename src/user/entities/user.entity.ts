import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    name: string

    @Column({ type: "varchar" })
    email: string

    @Column()
    password: string

    @Column()
    age:number

    @Column({ type: 'enum', enum: ['m', 'f', 'u'] })
    gender: string;

    @CreateDateColumn()
    createdAt:Date


}
