import {Entity, model, property} from '@loopback/repository';

@model()
export class Productos extends Entity {
  @property({
    type: 'string',
  })
  id?: string;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @property({
    type: 'number',
  })
  precio?: number;

  @property({
    type: 'number',
  })
  cantidad?: number;


  constructor(data?: Partial<Productos>) {
    super(data);
  }
}

export interface ProductosRelations {
  // describe navigational properties here
}

export type ProductosWithRelations = Productos & ProductosRelations;
