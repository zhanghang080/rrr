export {axios,url,enterweb,getneededstring,insertData,getNowDate}


const axios = require("axios")

let url = "https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_pc_3"

async function enterweb(url:string)
{
    let resp = await axios.get(url)
    return resp.data.toString()
}

async function getneededstring()
{

    //获取相应的json
    let res:string = await enterweb(url)
    let jsonstr:string = res.substring(res.indexOf(`captain-config`)+16,res.indexOf(`</script><script>var V`))
    let jsonOb = eval("("+jsonstr+")")
    //console.log(jsonstr)


    let resob = jsonOb.component[0]
    delete resob.backgroundColor
    delete resob.title
    delete resob.dataSource
    delete resob.hotwords
    delete resob.hotwordsDuros
    delete resob.subtitle
    delete resob.knowledges
    delete resob.gossips
    delete resob.kingData
    delete resob.logoList
    //console.log(resob)
    return resob
}
// @ts-ignore
async function insertData(collection,obj)
{
    // @ts-ignore
    let MongoClient = require("mongodb").MongoClient
    let dburl = "mongodb://localhost:27017/"
    let conf = {useNewUrlParser:true, useUnifiedTopology:true}
    await MongoClient.connect(dburl,conf,(err,db)=>
    {
        if(err)
        {
            throw err
        }
        let dbo = db.db("mytest")
        dbo.collection(collection).insertOne(obj,(err,res)=>
        {

            console.log("success")
            db.close()


        })
    })
}

function getNowDate():string
{
    let now = new Date();
    let year = now.getFullYear(); //得到年份
    let month = now.getMonth();//得到月份
    let date = now.getDate();//得到日期

    month = month + 1;
    if (month < 10)
    {
        // @ts-ignore
        month = "0" + month;
    }
    if (date < 10)
    {
        // @ts-ignore
        date = "0" + date;
    }

    let time = "";
    //精确到天
    time = year + "." + month + "." + date;

    return time
}

/**
getneededstring().then((resp)=>
{
    //console.log(resp)
    insertData("myinfo",resp)
})**/

export {}