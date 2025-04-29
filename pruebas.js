const { log } = require("async")

async function name1() {
    let promesa = new Promise((resolved) => {
        setTimeout(
            () => resolved('msg')
        )
    })
}

name1().then(
    valor => console.log(valor)
).catch(
    err => console.log(err)
)
