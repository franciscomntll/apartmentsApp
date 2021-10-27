import { SearchIcon } from '../icons'
import { useEffect, useState } from 'react'
const SearchComponent = (props) => {
    return (
        <span className="relative text-gray-700">
            <input type={"search"} className="w-full focus:outline-none pl-5 rounded-full border border-gray-300 py-2" {...props}  />
            {!props.value && <SearchIcon className="w-5 h-5 absolute top-0 right-5 my-auto inset-y-0" />}
        </span>
    )
}

export default SearchComponent
