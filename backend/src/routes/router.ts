import { localeRouter } from "./locales";
import { vehicleRouter } from "./vehicle";
import { userRouter } from "./user";
import { authRouter } from '../middleware/auth'
import { parkingRouter } from "./parking";

const routes = [userRouter, localeRouter, vehicleRouter, authRouter, parkingRouter]

export { routes }