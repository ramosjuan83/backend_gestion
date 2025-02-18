import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubcategoriaEntitiy } from 'src/typeorm/entities/subcategoria.entity';
import { SubcategoriaController } from './subcategoria.controller';
import { SubcategoriasService } from './subcategoria.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubcategoriaEntitiy])],
  controllers: [SubcategoriaController],
  providers: [SubcategoriasService]
})
export class SubcategoriasModule { }