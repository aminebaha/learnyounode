
module.exports = 
  
function filter(dir,ext,callback) {
    
    const fs = require('fs')
    const path = require('path')
    let res = []
fs.readdir(dir,(err,data)=>{
        if (err)
        return callback(err)

  
    data.forEach( (files) => {
        
         if(path.extname(files) === '.'+ext){
             console.log(files)
             res.push(files)
         }
       }) 
        callback(null,res)

    })


}
