import Item from "../Item/Item";
import FuctionCounter from "../ItemCount/ItemCount";

const ItemList = ({articulos}) => {

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
                <Item 
               productos= {e.productos}
                precio= {e.precio}
                stock= {e.stock}
                img= {e.img} 
                />
                 <FuctionCounter stock='10' initial='1' onAdd={onAdd} />

            </div>
        )
    })
)
}


export default ItemList 
