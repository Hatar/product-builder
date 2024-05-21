import { textSlice } from "../../helper"
import { IProduct } from "../../interface"
import Button from "../ui/Button"
import Circle from "../ui/Circle"
import Image from "../ui/Image"

interface IProps {
    product: IProduct,
    index:number,
    openEditModal:() => void,
    openDeleteProduct:() => void,
    setProductToEdit:(product:IProduct) => void,
    setIdxProductEdit:(index:number) => void
}
const ProductCard = ({product,index,setProductToEdit,setIdxProductEdit,openEditModal,openDeleteProduct}: IProps) => {
  const {title,description,price,imageUrl,category,colors} = product

  const editProduct = () => {
    openEditModal()
    setProductToEdit(product)
    setIdxProductEdit(index)
  }

  const deleteProduct = () =>{
    openDeleteProduct()
    setProductToEdit(product)
  }

  return (
    <div className="max-w-sm md:max-w-lg border rounded-md p-2 flex flex-col">
        <Image 
            imageUrl={imageUrl}
            alt={title}
            classname="rounded-md h-52 w-full lg-object-cover mb-5"
        />
        <h3 className="text-xl font-normal">{textSlice(title,20)}</h3>
        <p>{textSlice(description)}</p>
        <div className="flex items-center my-4 space-x-2">
            { colors.map((color) => <Circle key={color} color={color} />) }
        </div>
        <div className="flex items-center justify-between gap-3">
            <span>${price}</span>
            <Image 
                imageUrl={category.imageUrl}
                alt={category.name}
                classname="w-10 h-10 rounded-full"
            />
        </div>
        <div className="flex items-center justify-between gap-3 mt-5">
            <Button classname="bg-green-700" onClick={()=> editProduct()}>Edit</Button>
            <Button classname="bg-red-700" onClick={()=> deleteProduct()}>Delete</Button>
        </div>
    </div>
  )
}

export default ProductCard