// @ts-ignore
const MongoClient = require("mongodb").MongoClient
const dburl = "mongodb://localhost:27017/"
const conf = {useNewUrlParser:true,  useUnifiedTopology: true}

interface dateCondition
{
    mapLastUpdatedTime:any
    [prop:string]:any
}

async function connect()
{
    let retdb = null
    let dbo = null
    // @ts-ignore
    await new Promise((resolve,reject)=>
    {
        MongoClient.connect(dburl,conf,(err,db)=>
        {
            retdb = db
            dbo = db.db("mytest")
            resolve()
        })
    })
    return [retdb,dbo]
}


async function findByDate(dateCondition:dateCondition)  //查询包含某个日期
{
    let arr = await connect()
    let dbo = arr[1]
    let db = arr[0]
    let res = await dbo.collection("myinfo").find(dateCondition).toArray()
    db.close()
    return res

    //let outerres = "hello"
    // @ts-ignore
    /**
    await new Promise((resolve,reject)=>
    {

        MongoClient.connect(dburl,conf,(err,db)=>
        {

            if(err)
            {
                throw err
            }
            let dbo = db.db("mytest")
            let res = dbo.collection("myinfo").find(dateCondition).toArray((err,result)=>
            {
                outerres = result
                resolve()
                db.close()


            })

        })
    })
     **/


}
export {MongoClient,dburl,conf,findByDate,dateCondition}


