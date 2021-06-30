import { Router } from 'express'
import { Parking } from '../models/Parking'

const parkingRouter = Router()
const url = 'parkings'
parkingRouter.get(`/${url}`, async (request, response) => {
    try {
        const parkings = await Parking.find()
        return response.status(200).send(parkings)
    } catch (error) {
        return response.status(400).send(error)
    }
})
parkingRouter.get(`/${url}/:id`, async (request, response) => {
    try {
        const parking = await Parking.findById(request.params.id)
        return response.status(200).send(parking)
    } catch (error) {
        return response.status(400).send(error)
    }
})
parkingRouter.post(`/${url}`, async (request, response) => {
    try {
        const parking = await Parking.create(request.body)
        return response.status(201).send(parking)
    } catch (error) {
        return response.status(400).send(error)
    }
})
parkingRouter.delete(`/${url}/:id`, async (request, response) => {
    try {
        const parking = await Parking.findByIdAndDelete(request.params.id)
        return response.status(200).send(parking)
    } catch (error) {
        return response.status(400).send(error)
    }
})
parkingRouter.patch(`/${url}/:id`, async (request, response) => {
    try {
        const parking = await Parking.findByIdAndUpdate(request.params.id, request.body)
        return response.status(200).send(parking)
    } catch (error) {
        return response.status(400).send(error)
    }
})
parkingRouter.put(`/${url}/:id`, async (request, response) => {
    try {
        const parking = await Parking.findByIdAndUpdate(request.params.id, request.body)
        return response.status(200).send(parking)
    } catch (error) {
        return response.status(400).send(error)
    }
})
export { parkingRouter }
