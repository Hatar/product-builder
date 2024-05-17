export interface IProduct {
    id?: string | undefined,
    title:string,
    description:string,
    price:string,
    imageUrl:string,
    colors: string[],
    category:{
        name:string,
        image:string
    }
}


export interface IFormInputs {
    id:string,
    name: "title" | "description" | "price" | "imageUrl",
    type:string,
    label:string
}