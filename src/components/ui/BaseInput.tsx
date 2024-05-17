import { InputHTMLAttributes } from "react"


interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const BaseInput = ({...rest}:IProps) => {
  return (
    <input 
      className="
        border-[1px] border-gray-300 shadow-md focus:border-indigo-500 
        focus:outline-none focus:ring-2 focus:ring-indigo-500 
        rounded-md px-3 py-3 text-md
      " 
      {...rest} 
    />
  )
}

export default BaseInput