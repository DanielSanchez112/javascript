async function prmesaAsyncAwaitSTO() {
    let promesa = new Promise((resolved) => {
        setTimeout(
            () => resolved('promesa resuleta despues de cierto tiempo'), 3000
        )
    })

    console.log(await promesa);
}

prmesaAsyncAwaitSTO()