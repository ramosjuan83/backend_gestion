export class CreateTasaDto {
    id: number;
    moneda_id: number;
    tipo_cambio_id: number;
    monto_tasa: number;
    fecha: Date;
    defecto: boolean;
    status_id: number;
 }