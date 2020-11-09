const fs = require('fs')

fs.readFile(process.argv[2],(err,data)=>{
    if(err) 
        return new Error()

let content  = data.toString().split('\n').length-1

    console.log(content)
    
})