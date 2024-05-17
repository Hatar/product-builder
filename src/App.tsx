import { ChangeEvent, FormEvent, useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal"
import {FormList, ProductList} from './data'
import Button from "./components/ui/Button"
import BaseInput from "./components/ui/BaseInput"
import { IProduct } from "./interface"
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
        image:""
    }
  }
  const [isOpen, setIsOpen] = useState(false)
  const [product,setProduct] = useState<IProduct>(defaultProductState)
  /**  Handler  */

  const closeModal = () =>{
    setIsOpen(false)
    setProduct(defaultProductState)
  }

  const handleChangeInputs = (event:ChangeEvent<HTMLInputElement>) => {
    const {value,name} = event.target
    setProduct({
      ...product,
      [name]:value
    })
  }
  const handleSubmitForm = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    closeModal()
  }
  const renderProductList = () => {
    return ProductList.map((product) => <ProductCard product={product} key={product.id} /> )
  }


  const renderFormInputs =  FormList.map((input,idx) => (
      <div key={idx} className="flex flex-col">
        <label htmlFor={input.label} className="mb-[2px] text-sm font-medium text-gray-700">{input.label}</label>
        <BaseInput type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={handleChangeInputs} />
      </div>
    ));

  return (
    <main className="container">
      <Button classname="bg-indigo-700 hover:bg-indigo-800" onClick={()=> setIsOpen(true)}>Build Product</Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rouneded-md">
        {renderProductList()}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"ADD A NEW PRODUCT"} closeModal={closeModal}>
        <form className="space-y-3" onSubmit={handleSubmitForm}>
          {renderFormInputs}
          <div className="flex items-center space-x-3">
            <Button typeButton="submit" classname="bg-indigo-700 hover:bg-indigo-800">Send</Button>
            <Button classname="bg-gray-400 hover:bg-indigo-500" onClick={closeModal}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </main>
  )
}

export default App