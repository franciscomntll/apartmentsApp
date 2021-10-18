
const ButtonIcon = ({onClick,children}) => {
    return (
        <button onClick={onClick} className="focus:outline-none border border-gray-100 rounded-xl hover:bg-gray-100 bg-white p-2 transition text-gray-700">
            {children}
        </button >
    )
}

export default ButtonIcon
