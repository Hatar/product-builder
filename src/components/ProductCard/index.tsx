import { textSlice } from "../../helper"
import { IProduct } from "../../interface"
import Button from "../ui/Button"
import Image from "../ui/Image"

interface IProps {
    product: IProduct
}
const ProductCard = (props: IProps) => {
  const {title,description,price,imageUrl,category} = props.product
  return (
    <div className="max-w-sm md:max-w-lg border rounded-md p-2 flex flex-col">
        <Image 
            imageUrl={imageUrl}
            alt={title}
            classname="rounded-md h-52 w-full lg-object-cover mb-5"
        />
        <h3 className="text-xl font-normal">{textSlice(description,20)}</h3>
        <p>{textSlice(description)}</p>
        <div className="flex items-center my-4 space-x-2">
            <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
            <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
            <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
        </div>
        <div className="flex items-center justify-between gap-3">
            <span>${price}</span>
            <Image 
                imageUrl={category.image}
                alt={category.name}
                classname="w-10 h-10 rounded-full"
            />
        </div>
        <div className="flex items-center justify-between gap-3 mt-5">
            <Button classname="bg-green-700" onClick={()=> console.log("edit")}>Edit</Button>
            <Button classname="bg-red-700" onClick={()=> console.log("delete")}>Delete</Button>
        </div>
    </div>
  )
}

export default ProductCard