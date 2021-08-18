export interface UserInterface {
    _id?: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    type: typeof UserTypes[number],
    status: typeof UserStatus[number],
    updatedAt?: Date,
    createdAt?: Date
}
export interface UserLoginInterface {
    _id?: string,
    email: string,
    password: string,
    token?: string
}
export const UserTypes = ['Servidor', 'Aluno', 'Visitante'] as const
export const UserStatus = ['Ativo', 'Inativo'] as const