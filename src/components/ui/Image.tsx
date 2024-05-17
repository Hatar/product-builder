interface IProps {
    imageUrl:string,
    alt:string,
    classname?:string
}
const Image = ({imageUrl,alt,classname}:IProps) => {
  return (
    <img 
        src={imageUrl}
        alt={alt}
        className={classname}
    />
  )
}

export default Image