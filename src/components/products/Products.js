import { useState, useEffect } from "react"
import "./Products.css"

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [toggle, setToggle] = useState(false)

    useEffect(
        () => {
            fetch(`http://localhost:8088/products`)
                .then(response => response.json())
                .then((productArray) => {
                    setProducts(productArray)

                })
        },
        []
    )

    useEffect(
        () => {
            if (toggle) {
                const topPriceProducts = products.filter(
                    (product) => {
                        return (product.pricePerUnit > 2)
                    }
                )
                setFilteredProducts(topPriceProducts)
            } else {
                setFilteredProducts(products)
            }
        },
        [products, toggle]
    )


    return <>

        <h2>Product Inventory</h2>
        {
            toggle ? <button onClick={() => {
                setToggle(false)
            }}>Show All</button>
           : <button onClick={() => {
                    setToggle(true)
                }}>Top Priced</button>
        }
        <article className="products top-priced"

        ></article>



        <article className="products">
            {
                filteredProducts.map(
                    (product) => {
                        return <section key={product.id} className="product">
                            <header>{product.name}</header>
                            <footer>Price: {product.pricePerUnit}</footer>
                        </section>
                    }
                )
            }
        </article>
    </>

}

//TODO sort by product name