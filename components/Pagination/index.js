import PaginationDesktop from "./Pagination"
import PaginationMobile from "./PaginationMobile"

const Pagination = (props) => {
    return (
        <>
           <PaginationDesktop {...props}/>
           <PaginationMobile {...props}/> 
        </>
    )
}

export default Pagination
