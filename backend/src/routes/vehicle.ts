import { Router } from 'express'
import { Vehicle } from '../models/Vehicle'

const vehicleRouter = Router()
const url = 'vehicles'
vehicleRouter.get(`/${url}`, async (request, response) => {
    try {
        const vehicle = await Vehicle.find()
        return response.status(200).send(vehicle)
    } catch (error) {
        return response.status(400).send(error)
    }
})
vehicleRouter.get(`/${url}/:id`, async (request, response) => {
    try {
        const vehicle = await Vehicle.findById(request.params.id)
        return response.status(200).send(vehicle)
    } catch (error) {
        return response.status(400).send(error)
    }
})
vehicleRouter.post(`/${url}`, async (request, response) => {
    try {
        const vehicle = await Vehicle.create(request.body)
        return response.status(201).send(vehicle)
    } catch (error) {
        return response.status(400).send(error)
    }
})
vehicleRouter.delete(`/${url}/:id`, async (request, response) => {
    try {
        const vehicle = await Vehicle.findByIdAndDelete(request.params.id)
        return response.status(200).send(vehicle)
    } catch (error) {
        return response.status(400).send(error)
    }
})
vehicleRouter.patch(`/${url}/:id`, async (request, response) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(request.params.id, request.body)
        return response.status(200).send(vehicle)
    } catch (error) {
        return response.status(400).send(error)
    }
})
vehicleRouter.put(`/${url}/:id`, async (request, response) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(request.params.id, request.body)
        return response.status(200).send(vehicle)
    } catch (error) {
        return response.status(400).send(error)
    }
})
vehicleRouter.get(`/locales/:localeId/${url}`, async (request, response) => {
    try {
        const vehicle = await Vehicle.find({ _localeId: request.params.localeId })
        return response.status(200).send(vehicle)
    } catch (error) {
        return response.status(400).send(error)
    }
})
export { vehicleRouter }
