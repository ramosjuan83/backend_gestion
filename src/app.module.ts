import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntitiy } from './typeorm/entities/user.entity';
import { UsersModule } from './users/users.module';
import { CategoriasModule } from './categoria/categoria.module';
import { MovimientosModule } from './movimiento/movimiento.module';


import { CategoriaEntitiy } from './typeorm/entities/categoria.entity';
import { SubcategoriaEntitiy } from './typeorm/entities/subcategoria.entity';
import { SubcategoriasModule } from './subcategoria/subcategoria.module';
import { MonedaEntitiy } from './typeorm/entities/moneda.entity';
import { MonedasModule } from './moneda/moneda.module';
import { TipocambioEntitiy } from './typeorm/entities/tipocambio.entity';
import { TipocambiosModule } from './tipocambio/tipocambio.module';
import { TasaEntitiy } from './typeorm/entities/tasa.entity';
import { MovimientoEntitiy } from './typeorm/entities/movimiento.entity';
import { TasasModule } from './tasa/tasa.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'gestion',
    entities: [UserEntitiy,CategoriaEntitiy,SubcategoriaEntitiy,MonedaEntitiy,TipocambioEntitiy,TasaEntitiy, MovimientoEntitiy],
    synchronize: true

  }), UsersModule, CategoriasModule, SubcategoriasModule, MonedasModule, TipocambiosModule, TasasModule, MovimientosModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }