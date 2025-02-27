export type CreateUserParams = {
    username: string;
    password: string;
}

export type UpdateUserParams = {
    username: string;
    password: string;
}

export type CreateCategoriaParams = {
    id: number;
    tipo_movimiento: number;
    nombre: string;
}

export type UpdateCategoriaParams = {
    id: number;
    tipo_movimiento: number;
    nombre: string;
}

export type CreateSubcategoriaParams = {
    id: number;
    categoria_id: number;
    nombre: string;
    status_id: number;

}

export type UpdateSubcategoriaParams = {
    id: number;
    categoria_id: number;
    nombre: string;
    status_id: number;
}

export type CreateMonedaParams = {
    id: number;
    nombre: string;
    abreviatura: string;
    simbolo: string;
    status_id: number;

}

export type UpdateMonedaParams = {
    id: number;
    nombre: string;
    abreviatura: string;
    simbolo: string;
    status_id: number;

}


export type CreateTipocambioParams = {
    id: number;
    moneda_id: number;
    nombre: string;
    status_id: number;

}

export type UpdateTipocambioParams = {
    id: number;
    moneda_id: number;
    nombre: string;
    status_id: number;
}

export type CreateTasaParams = {
    id: number;
    moneda_id: number;
    tipo_cambio_id: number;
    monto_tasa: number;
    fecha: Date;
    defecto: boolean;
    status_id: number;

}

export type UpdateTasaParams = {
    id: number;
    moneda_id: number;
    tipo_cambio_id: number;
    monto_tasa: number;
    fecha: Date;
    defecto: boolean;
    status_id: number;
}


export type CreateMovimientoParams = {
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

export type UpdateMovimientoParams = {
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