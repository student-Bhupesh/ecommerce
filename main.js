import './style.css'
import products from "./api/product.json";
import { showProductContainer } from './public/homeProductCards';
// call the function to display all the products 

showProductContainer(products);
