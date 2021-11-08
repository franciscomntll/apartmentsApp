export const Button = ({variant, children, ...props}) => {
    const variants = {
        primary : "text-white bg-indigo-600 hover:bg-indigo-900 ",
        secondary : "relative inline-flex items-center rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
        warning : "text-white bg-red-500 hover:bg-red-600 ",
    }
    return (
        <button className={`px-3 text-sm py-2 rounded-md transition flex items-center gap-1 ${variants[variant]}`} {...props}>
            {children}
        </button>
        )
}
