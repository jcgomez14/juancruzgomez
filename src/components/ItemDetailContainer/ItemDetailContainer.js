import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getArticulos } from "../Mock/Mock"

const ItemDetailContainer = () => {

    const[articulos,setArticulos]=useState([])
    useEffect(()=>{
        getArticulos().then((articulos)=>{
        
            setArticulos(articulos)
        
        })
        
        
        },[])

    return(
        <div>
             <ItemDetail {...articulos}/>
        </div>     
       
    )
}

export default ItemDetailContainer ;