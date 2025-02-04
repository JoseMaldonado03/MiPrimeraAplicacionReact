import { useEffect, useState } from "react";
import { getCategory, getProducts } from "../../asyncMock";
import ItemCard from "./ItemCard";
import { useParams } from "react-router-dom";

export default function ItemListContainer (){

    const [products, setProducts]=useState(null);
    const {catId} = useParams();

useEffect(() => {
    if(!catId){
        getProducts().then((response) => setProducts(response));
    }else{
        getCategory(catId).then((response) => setProducts(response));

    }
},[catId]);

    return (
        <>
        <h1>Home {catId}</h1>
        {products?.map(product => (
            <ItemCard key={product.id} product = {product}/>
            ))}
        </>
    );
}