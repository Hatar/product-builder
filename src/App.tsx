import { ChangeEvent, FormEvent, useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal"
import {FormList, ProductList, categories, colors} from './data'
import Button from "./components/ui/Button"
import BaseInput from "./components/ui/BaseInput"
import { ICategory, IProduct } from "./interface"
import { validationProduct } from "./validation"
import ErrorsMsg from "./components/ui/ErrorsMsg"
import Circle from "./components/ui/Circle"
import { v4 as uuid } from 'uuid';
import Select from "./components/ui/Select"

const App =() => {
  /** State   */
  const defaultProductState = {
    title:"",
    description:"",
    price:"",
    imageUrl:"",
    colors: [],
    category:{
        name:"",
        imageUrl:""
    }
  }
  const [isOpen, setIsOpen] = useState(false)
  const [products,setProducts] = useState<IProduct[]>(ProductList)
  const [product,setProduct] = useState<IProduct>(defaultProductState)
  const [tempColor,setTempColor] = useState<string[]>([])
  const [selectedCategory,setSelectedCategory] = useState<ICategory>(categories[0])
  const [errors,setErrors] = useState({
    title:"",
    description:"",
    price:"",
    imageUrl:"",
    colors:""
  }
  )
  /**  Handler  */
  
  const closeModal = () =>{
    setTempColor([])
    setProduct(defaultProductState)
    setIsOpen(false)
  }

  // handle change Input
  const handleChangeInputs = (event:ChangeEvent<HTMLInputElement>) => {
    const {value,name} = event.target
    setProduct({
      ...product,
      [name]:value
    })
    setErrors({
      ...errors,
      [name]: ""
    })
  }
  /// render Product List
  const renderProductList = () => {
    return products.map((product) => <ProductCard product={product} key={product.id} /> )
  }

  const handleSubmitForm = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {title,description,imageUrl,price} = product
    const errors = validationProduct({title,description,imageUrl,price,colors:tempColor})
    const hasMessage = Object.values(errors).some((value) => value ===  "") && Object.values(errors).every((value) => value ===  "")
    if(!hasMessage){
      setErrors(errors)
      return
    }
    setProducts((prev) => [{id:uuid(), ...product,colors: tempColor,category:selectedCategory},...prev])
    closeModal()
  }

  const renderFormInputs =  FormList.map((input,idx) => (
      <div key={idx} className="flex flex-col">
        <label htmlFor={input.label} className="mb-[2px] text-sm font-medium text-gray-700">{input.label}</label>
        <BaseInput type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={handleChangeInputs} />
        <ErrorsMsg msg={errors[input.name]}/>
      </div>
    ));

  const renderColorList = colors.map((color) => <Circle key={color} color={color} onClick={() => {

      if(tempColor.includes(color)){

        setTempColor((prev) => prev.filter((item) => item !== color))
        return;  

      }

      setTempColor((prev) => [...prev,color])
      setErrors({
        ...errors,
        ["colors"]: ""
      })

    } }/>)

  return (
    <main className="container">
      <div className="flex flex-row justify-center mt-5">
        <Button classname="bg-indigo-700 hover:bg-indigo-800 w-44" onClick={()=> setIsOpen(true)}>Build Product</Button>
      </div>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rouneded-md">
        {renderProductList()}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"ADD A NEW PRODUCT"} closeModal={closeModal}>
        <form className="space-y-3" onSubmit={handleSubmitForm}>
          {renderFormInputs}
          <div className="flex flex-wrap items-center my-4 space-x-2">
            {renderColorList}
            {tempColor && tempColor.length > 0 && tempColor.map((color) => <span key={color} className="text-white font-semibold my-1 block" style={{backgroundColor: color}}>{color}</span>)}
            <ErrorsMsg msg={errors["colors"]}/>
          </div>

          <Select selected={selectedCategory} setSelected={setSelectedCategory} />
          <div className="flex items-center space-x-3">
            <Button typeButton="submit" classname="bg-indigo-700 hover:bg-indigo-800">Send</Button>
            <Button classname="bg-gray-400 hover:bg-indigo-500" onClick={(e) => {
                e.preventDefault()
                closeModal()
            }}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </main>
  )
}

export default App