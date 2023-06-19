import { TagMain } from "./style";
import { useContext, useEffect, useState } from "react"
import { filterContext } from "../../context/filterContext";

import { BsCartPlusFill} from 'react-icons/bs';
import api from "../../api/api";

import BgSlide from '../../assets/bg-slide.webp';

const Main = () => {
    const [products, setProducts] = useState([])
    const {nameProductFilter, productAddCarrinho, setProductAddCarrinho} = useContext(filterContext)

    useEffect(() => {
        api(nameProductFilter).then(product => {
            setProducts(product)
        })
    },[nameProductFilter])

    const addProductCarrinho = (productSelection) => {
        productSelection.preventDefault()
        const href = productSelection.currentTarget.href
        const src = productSelection.currentTarget.children[0].src
        const textContentPrice = productSelection.currentTarget.children[1].textContent
        const textContentDescription = productSelection.currentTarget.children[2].textContent

        const items = {
            src,
            href,
            textContentPrice,
            textContentDescription
        }
        setProductAddCarrinho([...productAddCarrinho, items])
    }

    return (
        <TagMain>
            <section className="slide">
                <img src={BgSlide} alt="bg-slide" />
            </section>
            <div className="title">
                <h2>Ofertas do dia</h2>
            </div>
            <article>
                {
                    products.map(product => {
                        const {id, thumbnail, title, price, permalink} = product
                        const priceCenter = price.toLocaleString("pt-br",{
                            style:"currency",
                            currency:"BRL"
                        })
                        return (
                            // <div onClick={addProductCarrinho} key={id} className="card" href={permalink} target="_blank" rel="noopener noreferrer">
                            <a onClick={addProductCarrinho} key={id} className="card" href={permalink} >
                                <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}/>
                                <div className="price">{priceCenter}</div>
                                <div className="description" >
                                    <p aria-description={title}>{title}</p>
                                </div>
                                <div className="add-card">
                                    <button>
                                        <BsCartPlusFill/>
                                    </button>
                                </div>
                            </a>
                        )
                    })
                }
            </article>
        </TagMain>
    )
}

export default Main