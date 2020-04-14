import {axios,url,enterweb,getneededstring,insertData,getNowDate} from "./tes1"
import {MongoClient,dburl,conf,findByDate,dateCondition} from "./tes2"

export class DataGetter
{
    async getTodayData()
    {

        // @ts-ignore
        let todayData = await this.getneededdata()
        return todayData
    }
    private async getneededdata()
    {
        let date = getNowDate()   //获取今天日期
        let dateCondition = {mapLastUpdatedTime:new RegExp(date)}
        let findres = await findByDate(dateCondition)

        if(findres.length >0)  //数据库中已经有这个数据
        {
            console.log("从数据库获取数据")
            return findres[0]
        }
        else
        {
            console.log("从网上获取数据")
            //网上获取数据并插入数据库
            let retdata = await getneededstring().then((resp)=>
            {
                //console.log(resp)
                insertData("myinfo",resp)
                return resp
            })
            return retdata
        }

    }

}

//new DataGetter().getTodayData()