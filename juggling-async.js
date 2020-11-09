const http = require('http')
let str =''
let urls = process.argv.slice(3)



for(let i=0;i<urls.length;i++) {

    console.log(getContent(urls[i],(err)=>{
        if(err)
            throw err
    }))
}

function getContent(url,callback) {
    let str = ''
    let request = http.get(process.argv[2],(err,response)=>{
        if(err)
            callback(err)

        response.setEncoding('utf-8')
        response.on('data',(data)=>{
            str+= data
        })
    })
    response.on('end',(data)=>{
        
        callback(null,data)
        })
 return str
}
