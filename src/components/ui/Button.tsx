import { ButtonHTMLAttributes, ReactNode } from "react"

interface  IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    classname?:string,
    width?:"w-full" | "w-fit",
    typeButton?: 'submit' | "button"
}
const Button= ({children,classname,width="w-full",typeButton,...rest}:IProps) => {
  return (
    <button type={typeButton} className={`${classname} ${width} rounded-md text-white p-2`} {...rest}>{children}</button>
  )
}

export default Button