interface IProps {
    msg:string
}
const ErrorsMsg =({msg}:IProps) => {
  return (
    <>
        {msg ? (<span className="block text-red-700  font-semibold txt-sm ml-0">{msg}</span>) : null}
    </>
  )
}

export default ErrorsMsg