export class CreateMovimientoDto {
    id: number;
    categoria_id: number;
    subcategoria_id: number;
    tasa_id: number;
    fecha_movimiento: Date;
    hora: Date;
    monto_bolivares: number;
    monto_divisas: number;
    status_id: number;
 }