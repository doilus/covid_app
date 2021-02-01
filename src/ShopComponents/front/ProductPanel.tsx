import React from "react";
import "../css/ProductPanel.scss"
import Product from "../interfaces/Product"

class ProductPanel extends React.Component {

    state = {products: []}

    componentDidMount() {

        const auth = window.btoa("admin@test.com" + ':' + "test");
        const request = {
            headers: {'Authorization': 'Basic ' + auth}
        };
        fetch('http://localhost:8080/product/all', request)
            .then(res => res.json())
            .then((data) => {
                this.setState({products: data});
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="shopProducts">
                {this.state.products.map((product: Product) => {
                    const imgURI = "http://localhost:8080/image/" + product.image.id;
                    let rec = 0;
                    return (
                        <section className="product-cell">
                            <div className="product">
                                <div className="product-image">
                                    <img className="prodImg" src={imgURI} alt="Logo"/>
                                </div>
                                <div className="product-info">
                                    <h1>{product.name}</h1>
                                    <p className="price">{product.price} zł</p>
                                    <p>
                                        {product.descr}
                                    </p>
                                    <p>
                                        <button>Add to Cart</button>
                                    </p>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
        );
    }
}

function

callItems(name: string) {
}

export default ProductPanel;