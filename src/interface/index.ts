export interface IProduct {
    id?: string | undefined,
    title:string,
    description:string,
    price:string,
    imageUrl:string,
    colors: string[],
    category:{
        name:string,
        imageUrl:string
    }
}


export interface IFormInputs {
    id:string,
    name: "title" | "description" | "price" | "imageUrl",
    type:string,
    label:string
}


export interface ICategory {
    id:string,
    name:string,
    imageUrl:string
}