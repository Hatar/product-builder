export const validationProduct = (product: {title:string,description:string,imageUrl:string,price:string,colors: string[] }) =>{
    const errors: {title:string,description:string,imageUrl:string,price:string,colors: string } = {
        title:"",
        description:"",
        imageUrl:"",
        price:"",
        colors:""
    }

    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageUrl) 

    if(!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
        errors.title = "Product title must be between 10 and 80 charachter"    
    } 

    if(!product.description.trim() || product.description.length < 10 || product.description.length> 900) {
        errors.description = "Product description must be between 10 and 900 character"
    }

    if(!product.imageUrl.trim() || !validUrl) {
        errors.imageUrl = "Valid image url is required"    
    }

    if(!product.price.trim() || isNaN(Number(product.price))) {
        errors.price = "Valid price is required"
    }

    if(product.colors.length === 0) {
        errors.colors = "colors need at leat one color is required"
    }

    return errors
}