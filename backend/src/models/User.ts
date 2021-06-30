import { LocaleSchema } from './Locale';
import { mongoose } from '../database/database'
import bcrypt from 'bcryptjs'
import { environment } from '../config/config';


export interface UserServidor extends mongoose.Document {
    _id?: string,
    ramal: string,
    branchLine: string,
    room: string,
    role: string,
    registrationId: string
}

export const UserServidorSchema = new mongoose.Schema({
    ramal: {
        type: String,
        required: true
    },
    branchLine: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    registrationId: {
        type: String,
        required: true
    }
}
)
export interface UserAluno extends mongoose.Document {
    _id?: string,
    course: string,
    ra: string
}
export const UserAlunoSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true
    },
    ra: {
        type: String,
        required: true
    }
}
)
export interface UserVisitante extends mongoose.Document {
    _id?: string,
    cpf: string
}

export const UserVisitanteSchema = new mongoose.Schema({
    cpf: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)
export interface UserInterface extends mongoose.Document {
    _id?: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    type: 'Servidor' | 'Aluno' | 'Visitante',
    status: 'Ativo' | 'Inativo',
    updatedAt?: Date,
    createdAt?: Date
}
export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 3
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: 8
    },
    type: {
        type: String,
        required: true,
        enum: ['Servidor', 'Aluno', 'Visitante']
    },
    status: {
        type: String,
        required: true,
        enum: ['Ativo', 'Inativo']
    },
    servidorInfo: UserServidorSchema,
    alunoInfo: UserAlunoSchema,
    visitanteInfo: UserVisitanteSchema,
},
    {
        timestamps: true
    }
)

UserSchema.pre<UserInterface>('save', async function (next) {
    const user = this
    if (!user.isModified('password')) {
        next()
    } else {
        const hash = await bcrypt.hash(this.password, environment.security.saltRounds)
        this.password = hash
        next()
    }
})
const User = mongoose.model('User', UserSchema)

export { User }