//import salad from '../assets/img/1salad.png' ;
//import china from '../assets/img/1china.png' ;
//import deMarco from '../assets/img/1mac.png' ;
import FuctionCounter from "../ItemCount/ItemCount"



const articulos = [
    {producto: 'Remera Salad' , img: "./assets/img/1salad.png" , alt: 'Remera Salad'},
    {producto: 'Remera China' , img: "./assets/img/1china.png" , alt: 'Remera China' },
    {producto: 'Remera Mac DeMarco' , img: "./assets/img/1mac.png" , alt: 'Remera MacDeMarco'},
]


function ItemListContainer (){

    const onAdd = (count) => {
        if(count > 0){
        alert(`Agregaste ${count} productos al carrito`)
        }
        else{
            alert(`No se puede agregar 0 productos al carrito`)

        }
    }

    return(
        articulos.map(e =>{
            return(
                <div>
                    <h3>{e.producto}</h3>
                    <img src={e.img} alt={e.alt}></img>
                    <FuctionCounter stock='5' initial='1' onAdd={onAdd} />
                </div>
            )
        })
    )
}
    export default ItemListContainer