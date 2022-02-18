
const Item = ({producto, precio, img, stock, id}) =>{

    return(
        
        <li key={id}> 
            <img src={img}></img>
            <p>{producto}</p>
            <p>precio:${precio}</p>
            <p>stock:{stock}</p> 
        </li>

    
    )

}

export default Item