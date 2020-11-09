let args = process.argv

let sum = 0

for(let i=0;i<args.length;i++) {
    if(!isNaN( args[i])) {
        sum += Number(args[i])
    }
}
console.log(sum)