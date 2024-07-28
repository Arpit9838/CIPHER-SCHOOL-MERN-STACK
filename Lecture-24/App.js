console.log(global)

setTimeout (() => {
    console.log('Timed it for 2 seconds')
}, 2000)

var time = 0;
setInterval( () => {
    time += 2;
    console.log(time, 'Time passed')
    if(time > 10){
        clearInterval(time)
    }
},2000)

console.log(__dirname)
console.log(__filename)