import Item from "../Item/Item"
import FuctionCounter from "../ItemCount/ItemCount";


const ItemDetail = (articulos) =>{


    console.log(articulos)
    return(
        articulos.map(e =>{
            return(
                <div>
                    <Item 
                   productos= {e.productos}
                    precio= {e.precio}
                    stock= {e.stock}
                    img= {e.img} 
                    />
                     <FuctionCounter stock='10' initial='1' />
    
                </div>
            )
        })
    )
 
    }
    
    
    export default ItemDetail;