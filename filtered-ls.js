const fs = require('fs')
const path = require('path')


fs.readdir(process.argv[2],(err,data)=>{
    if(err) throw err


    data.forEach( (files) => {
        
         if(path.extname(files) === '.'+process.argv[3]){
             console.log(files)
         }
       }) 
})