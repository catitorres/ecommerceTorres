import ItemListContainer from "./ItemListContainer";

let dataItems= true;

let getData = () =>{
    return new Promise((resolve, reject) =>{
        if (dataItems) {
            setTimeout(() => {
                resolve (ItemListContainer)
            }, 2000)
        } else reject("error")
    })
}

getData()
    .then(dat => console.log (dat))
    .catch((err) => console.log(err))