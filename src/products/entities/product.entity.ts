import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    image: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    rating: string;


}
