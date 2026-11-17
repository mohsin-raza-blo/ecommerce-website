
import { createContext, useContext, useState } from "react"

const MySearchProducts = createContext()
function useMySearch() {
    return useContext(MySearchProducts)
}

const FilterProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("")

    const searchHandle = (searchInput) => {
       setSearchTerm(searchInput)
       console.log(searchTerm, 'hhyh8iuwfgsdajkghj')
    }



    return (
        <MySearchProducts.Provider value={{ searchTerm, setSearchTerm, searchHandle }}>
            {children}
        </MySearchProducts.Provider>
    )

}

export { useMySearch, FilterProvider }
