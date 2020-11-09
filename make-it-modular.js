const mod = require('./mymodule.js')
let dir = process.argv[2]  
let ext = process.argv[3]

mod(dir, ext, (err) =>{
    if (err) return
        callback(err)

    data.forEach((file) =>{
        console.log(file);
    });
});