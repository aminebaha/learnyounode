const http = require('http')
let str =''
let urls = process.argv.slice(3)
let result = []


for(let i=0;i<urls.length;i++) {

    result[i] = ''
}

let request
for(let j=0;j<result.length;j++) {

     request = http.get(result[i],(response)=>{       
        response.setEncoding('utf-8')
        response.on('data',(data)=>{
         str +=  data   
      })
        response.on('end',(data)=>{
            result[i] = str
     })
     
     })


}
for(let x=0;x<result.length;x++) {
    console.log(result[x])
}
