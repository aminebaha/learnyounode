const http = require('http')
let str =''
let request = http.get(process.argv[2],(response)=>{
   response.setEncoding('utf-8')
   response.on('data',(data)=>{
    str +=  data
    
 })

   response.on('end',(data)=>{
    console.log(str.length)
    console.log(str)
})

   
})