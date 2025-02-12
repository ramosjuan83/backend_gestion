import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaEntitiy } from 'src/typeorm/entities/categoria.entity';
import { CategoriaController } from './categoria.controller';
import { CategoriasService } from './categoria.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaEntitiy])],
  controllers: [CategoriaController],
  providers: [CategoriasService]
})
export class CategoriasModule { }