import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntitiy } from './typeorm/entities/user.entity';
import { UsersModule } from './users/users.module';
import { CategoriasModule } from './categoria/categoria.module';

import { CategoriaEntitiy } from './typeorm/entities/categoria.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'gestion',
    entities: [UserEntitiy,CategoriaEntitiy],
    synchronize: true

  }), UsersModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }