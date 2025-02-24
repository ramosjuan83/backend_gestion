import { EntitySubscriberInterface, EventSubscriber, InsertEvent, DataSource } from 'typeorm';
import { TasaEntitiy } from './tasa.entity';
import { TasasService } from 'src/tasa/tasa.service';




@EventSubscriber()
export class TasaItemSubscriber implements EntitySubscriberInterface<TasaEntitiy> {

  constructor(private dataSource: DataSource, private readonly tasaService: TasasService) {
    this.dataSource.subscribers.push(this);
  }


  listenTo() {
      return TasaEntitiy;
    }
    
    async afterInsert(event: InsertEvent<TasaEntitiy>) {
      const tasaItem = event.entity;
      //console.log("ESCUCHO 2",tasaItem);
    // Update the product's sales count
    await this.tasaService.actualizaPorDefecto(tasaItem);
  }



  // afterInsert(event: InsertEvent<any>) {
  //   console.log(`AFTER ENTITY INSERTED: `, event.entity.id)
  // }
}