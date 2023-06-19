import { useContext, useState } from "react"
import { TagHeader, Carrinho, LengthCarrinho } from "./style"

import { BsCartFill} from 'react-icons/bs';
import { filterContext } from "../../context/filterContext";

import ImgLogo from '../../assets/logo-page.png';

const Header = () => {
    const [ product, setProduct ] = useState("")
    const { setNameProductFilter, productAddCarrinho, setProductAddCarrinho} = useContext(filterContext)
    const [ carrinho, setCarrinho ] = useState(false)

    const searchProduct = (event) => {
        event.preventDefault()
        setNameProductFilter(product)
        setProduct("")
    }

    const toogleCarrinho = () => {
        setCarrinho(
            carrinho === true ? false : true
        )
    }

    const clearCarrinho = () => {
        const removeItems = productAddCarrinho.filter(items => {
            return items
        })
        removeItems.splice(0, removeItems.length)
        setProductAddCarrinho(removeItems)
    }
    return (
        <TagHeader>
            <nav>
                <a href="#" className="logo">
                    <img src={ImgLogo} alt="logo" />
                </a>
                <form onSubmit = {searchProduct}>
                    <input onChange = {({target}) => setProduct(target.value)} value={product} type="text" placeholder="Buscar produtos, marcas e muito mais…" required/>
                </form>
                <div className = "btn-carrinho">
                    <button onClick={toogleCarrinho}>
                        <BsCartFill/>
                    </button>
                    <LengthCarrinho props={productAddCarrinho.length}>{productAddCarrinho.length}</LengthCarrinho>
                </div>
            </nav>
            <Carrinho props={carrinho.toString()}>
                <div className="header-carrinho">
                    <div className="title-carrinho">
                        <p>carrinho</p>
                    </div>
                    <div className="btn-close">
                        <button onClick={toogleCarrinho}>
                            X
                        </button>
                    </div>
                </div>
                <article className="main-carrinho">
                    {
                        productAddCarrinho.map( productCar => {
                            const {src, textContentPrice, textContentDescription, href} = productCar
                            return(
                                <a key={src} className="card-carrinho" href={href} target="_blank" rel="noopener noreferrer">
                                    <img src={ src.replace(/\w\.jpg/gi, "W.jpg") }/>
                                    <div className="price">{textContentPrice}</div>
                                    <div className="description">
                                        <p>{textContentDescription}</p>
                                    </div>
                                </a>
                            )
                        } )
                    }
                </article>
                <div className="footer-carrinho">
                    <div className="btn-footer-carrinho">
                        <button onClick={clearCarrinho}>limpar carrinho</button>
                    </div>
                </div>
            </Carrinho>
        </TagHeader>
    )
}

export default Header