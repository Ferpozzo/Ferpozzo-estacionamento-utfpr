import mongoose, { Schema } from 'mongoose'

export interface ParkingInterface extends mongoose.Document {
    _id?: string,
    description: string,
    updatedAt?: Date,
    createdAt?: Date
}
export const ParkingSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)
const Parking = mongoose.model('Parking', ParkingSchema)

export { Parking }