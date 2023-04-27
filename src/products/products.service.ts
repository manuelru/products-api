import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) { }

  async create(createProductDto: CreateProductDto) {
    const model = await this.productsRepository.create(createProductDto);
    this.productsRepository.save(model);
    return model;
  }

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id: string) {
    const menu = this.productsRepository.findOne({ where: {id}});
    return menu;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
