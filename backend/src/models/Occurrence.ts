import mongoose, { Schema } from 'mongoose'

export interface OcurrenceInterface extends mongoose.Document {
    _id?: string,
    _parkingId: string,
    _carPlate: string,
    date: Date,
    observation?: string,
    updatedAt?: Date,
    createdAt?: Date
}
export const OcurrenceSchema = new mongoose.Schema({
    _parkingId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Parking'
    },
    _carPlate: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Vehicle'
    },
    date: {
        type: Date,
        required: true
    },
    observation: {
        type: String,
        required: false
    }
},
    {
        timestamps: true
    }
)
const Ocurrence = mongoose.model('Ocurrence', OcurrenceSchema)

export { Ocurrence }