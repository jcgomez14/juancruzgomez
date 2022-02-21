const articulos = [
    {id:1 , producto: 'Remera Salad' , precio: '1800' , img: "./assets/img/1salad.png" , alt: 'Remera Salad' , stock: 10},
    {id:2 , producto: 'Remera China' , precio: '2000' , img: "./assets/img/1china.png" , alt: 'Remera China' , stock: 10},
    {id:3 ,producto: 'Remera Mac DeMarco' , precio: '2200' , img: "./assets/img/1mac.png" , alt: 'Remera MacDeMarco', stock: 10},
]


export const getArticulos =() =>{
    return new Promise((resolve,reject)=>{
    
        setTimeout(()=>{
            resolve(articulos)
    
        },2000)
    
        })
    
    }