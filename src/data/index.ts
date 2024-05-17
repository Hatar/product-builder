import { v4 as uuid } from 'uuid';
import { IFormInputs, IProduct } from '../interface';
export const ProductList: IProduct[] = [
    {
    "id": uuid(),
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "colors":["#F7026D","#0200F5","#F29D00"],
    "imageUrl": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "category":{
        "name": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    }
  },
  {
    "id": uuid(),
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "colors":["#C0091E","#CFD8D7","#000000"],
    "imageUrl": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "category":{
        "name": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    }
  },
  {
    "id": uuid(),
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "colors":["#042940","#005C53","#D6D58E"],
    "imageUrl": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "category":{
        "name": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    }
  },
  {
    "id": uuid(),
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "colors":["#F7026D","#0200F5","#F29D00"],
    "imageUrl": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "category":{
        "name": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    }
  },
  {
    "id": uuid(),
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "colors":["#F7026D","#0200F5","#F29D00"],
    "imageUrl": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "category":{
        "name": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    }
  },
  {
    "id": uuid(),
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "colors":["#F7026D","#0200F5","#F29D00"],
    "imageUrl": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "category":{
        "name": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    }
 }
]


export const FormList: IFormInputs[] = [
  {
    type:"text",
    label:"title",
    name:"title",
    id:"title"
  },
  {
    type:"text",
    label:"description",
    name:"description",
    id:"description"
  },
  {
    type:"text",
    label:"price",
    name:"price",
    id:"price"
  },
  {
    type:"text",
    label:"imageUrl",
    name:"imageUrl",
    id:"imageUrl"
  }
]