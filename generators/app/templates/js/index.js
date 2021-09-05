console.log('hello world')

setTimeout(()=>{
    console.log('settimeout')
},0)

Promise.resolve(1).then(function(){
    console.log('promise')
}).then(()=>{
    console.log('promise2')
})

let timer1 = setInterval(()=>{
    console.log('interval')
    clearInterval(timer1)
},0)