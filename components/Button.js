const Button = ({variant, children, ...props}) => {
    const variants = {
        primary : "text-white bg-blue-500 hover:bg-gray-200 hover:text-gray-900",
        secondary : "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
    }
    return (
        <button className={`px-3 text-sm py-2 rounded-md transition flex items-center gap-1 ${variants[variant]}`} {...props}>
            {children}
        </button>
        )
}

export default Button
 