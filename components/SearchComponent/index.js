import {SearchIcon} from '../icons'
import {useState} from 'react'
const SearchComponent = (props) => {
    const [value, setValue] = useState()
    const handleChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }
    return (
        <span className="relative text-gray-700">
            <input type={"search"} className="w-full focus:outline-none pl-3 rounded-lg border  border-gray-300 py-1" {...props} value={value} onChange={handleChange} />
            {!value && <SearchIcon className="w-5 h-5 absolute top-0 right-3 my-auto inset-y-0" />}
        </span>
    )
}

export default SearchComponent
