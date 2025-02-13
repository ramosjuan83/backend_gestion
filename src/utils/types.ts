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