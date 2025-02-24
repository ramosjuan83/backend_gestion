import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasaEntitiy } from 'src/typeorm/entities/tasa.entity';
import { TasaController } from './tasa.controller';
import { TasasService } from './tasa.service';
import { TasaItemSubscriber } from 'src/typeorm/entities/tasa.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([TasaEntitiy])],
  controllers: [TasaController],
  providers: [TasasService, TasaItemSubscriber]
})
export class TasasModule { }