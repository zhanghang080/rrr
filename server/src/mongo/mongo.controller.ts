import {Controller, Get} from '@nestjs/common';
import {DataGetter} from "../VisitMongoDb/mongodbUtils"
@Controller('mongo')
export class MongoController
{
    @Get("getTodayData")
    async getTodayData()
    {

       let todayData = await new DataGetter().getTodayData()
        return todayData
    }
}
