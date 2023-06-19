import { createContext, useState } from "react";

export const filterContext = createContext()

export const Provider = ({children}) => {
    const [nameProductFilter, setNameProductFilter] = useState("iphone")
    const [productAddCarrinho, setProductAddCarrinho] = useState([])

    const value = {
        nameProductFilter,
        setNameProductFilter,
        productAddCarrinho,
        setProductAddCarrinho
    }

    return (
        <filterContext.Provider value={value}>
            {children}
        </filterContext.Provider>
    )
}