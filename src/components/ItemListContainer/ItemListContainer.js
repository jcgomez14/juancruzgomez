//import salad from '../assets/img/1salad.png' ;
//import china from '../assets/img/1china.png' ;
//import deMarco from '../assets/img/1mac.png' ;


const articulos = [
    {producto: 'Remera Salad' , img: "./assets/img/1salad.png" },
    {producto: 'Remera China' , img: "./assets/img/1china.png" },
    {producto: 'Remera Mac DeMarco' , img: "./assets/img/1mac.png" },


]


function ItemListContainer  (){
    return(
        articulos.map(e =>{
            return(
                <div>
                    <h3>{e.producto}</h3>
                    <img src={e.img}></img>
                </div>
            )
        })
    )
}
    export default ItemListContainer