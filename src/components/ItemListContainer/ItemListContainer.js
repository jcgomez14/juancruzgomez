//import salad from '../assets/img/1salad.png' ;
//import china from '../assets/img/1china.png' ;
//import deMarco from '../assets/img/1mac.png' ;
import { useEffect,useState } from "react";
import ItemList from "../ItemList/ItemList"




const articulos = [
    {id:1 , producto: 'Remera Salad' , precio: '1800' , img: "./assets/img/1salad.png" , alt: 'Remera Salad' , stock: 10},
    {id:2 , producto: 'Remera China' , precio: '2000' , img: "./assets/img/1china.png" , alt: 'Remera China' , stock: 10},
    {id:3 ,producto: 'Remera Mac DeMarco' , precio: '2200' , img: "./assets/img/1mac.png" , alt: 'Remera MacDeMarco', stock: 10},
]


const getArticulos =() =>{
    return new Promise((resolve,reject)=>{
    
        setTimeout(()=>{
            resolve(articulos)
    
        },2000)
    
        })
    
    }


function ItemListContainer (){

    const[articulos,setArticulos]=useState([])
    useEffect(()=>{
        getArticulos().then((articulos)=>{
        
            setArticulos(articulos)
        
        })
        
        
        },[])

    return(
        <div>
            <ItemList articulos={articulos}/>
        </div>     
       
    )
}
    export default ItemListContainer