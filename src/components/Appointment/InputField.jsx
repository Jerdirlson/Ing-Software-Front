const InputField = ({type, placeholder,name,size, isDisabled}) => {
    const className = `border-gray-400 border rounded-lg h-8 p-1 ${size}`
    return (
        <input disabled={isDisabled} className={className} type={type} placeholder={placeholder} name={name} />
    )
}
export default InputField