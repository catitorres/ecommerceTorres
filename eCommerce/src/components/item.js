const {itemList} = require ('./itemList')
let is_ok = false;

let getData = () =>{
    return new Promise((resolve, reject) =>{
        if (is_ok) {
            setTimeout(() => {
                resolve (itemList);
            }, 2000)
        } else reject("error")
    })
}

getData()
    .then(dat => console.log (dat))
    .catch((err) => console.log(err))
