import React from "react";
import {shopItems} from "./ShopItems"
import "../css/FilterPanel.scss"
import ProductInBasketCollection from "../interfaces/ProductInBasketCollection";
import ProductInBasket from "../interfaces/ProductInBasket";
import {AiOutlineMinus, AiOutlinePlus, RiDeleteBin5Line} from "react-icons/all";

interface myPropsFilterPanel {
    filterProduct: (text: string) => void
    prodToAdd: string
}

enum BasketAction {
    ADD, REMOVE, SUB
}

class FilterPanel extends React.Component<myPropsFilterPanel, {}> {
    state = {
        applyFilter: false,
        productsInBasket: [],
        aniMarker: 0,
        owner: null
    };

    constructor(props: myPropsFilterPanel) {
        super(props);
    }

    componentDidUpdate(prevProps: Readonly<myPropsFilterPanel>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.prodToAdd !== prevProps.prodToAdd) {
            this.setState({productsInBasket: this.getPrLstFromLocSt()});
        }
    }

    componentDidMount() {
        this.setState({productsInBasket: this.getPrLstFromLocSt()});
    }

    render() {
        const prInBasket = this.state.productsInBasket;
        const aniMarker = this.state.aniMarker;
        const callOwner = this.state.owner;
        const prodToAdd = this.props.prodToAdd;
        console.log(prodToAdd);
        return (
            <div className="filter-panel-back">
                <div className="filter-panel-item">
                    {shopItems.map((item, index) => {
                        return (
                            <ul className="bar">
                                <li key={index} className={item.cName} onClick={() => {
                                    this.setState({applyFilter: true})
                                    this.props.filterProduct(item.cat)
                                }}>
                                    {item.ikon}
                                    {item.Name}
                                </li>
                            </ul>
                        );
                    })}
                    <div className="buttonArea">
                        {this.state.applyFilter &&
                        <button onClick={() => {
                            this.setState({applyFilter: false});
                            this.props.filterProduct("")
                        }}>Wyczyść filtr</button>
                        }
                    </div>
                </div>
                <div className="basket-shop-display">
                    <p>Podgląd koszyka:</p>
                    <table className="basket-table">
                        {prInBasket.map((p: ProductInBasket, index) => {
                            return (
                                <tr
                                    // @ts-ignore.
                                    aniMarker={(aniMarker !== 0 && index === callOwner) ? aniMarker :
                                        (p.name + p.qty === prodToAdd) ? 1 : 0}
                                    className="basket-table-row"
                                    onAnimationEnd={() => {
                                        this.setState({aniMarker: 0})
                                    }}
                                >
                                    <td>
                                        <li className="basket-table-first-cell">{p.name}</li>
                                    </td>
                                    <td>{" x" + p.qty}</td>
                                    <div className="basket-table-buttons">
                                        <td onClick={() => {
                                            this.handleAdd(p.name, index)
                                        }}

                                        ><AiOutlinePlus/></td>
                                        <td><AiOutlineMinus onClick={() => this.handleMinus(p.name, index)}/></td>
                                        <td><RiDeleteBin5Line onClick={() => {
                                            this.handleDelete(p.name)
                                        }}/></td>
                                    </div>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
        );
    };

    private getPrLstFromLocSt = () => {
        const productsInLocStr: ProductInBasketCollection = JSON.parse(localStorage.getItem("productsInBasket") as any);
        return productsInLocStr.products;
    }

    private handleAdd(product: string, index: number) {
        this.updateBasket(product, BasketAction.ADD, 1);
        this.setState({
            aniMarker: 1,
            owner: index
        })
    }

    private updateBasket(product: string, action: BasketAction, qty: number) {
        const prLstFromLocSt = this.getPrLstFromLocSt();
        prLstFromLocSt.forEach((p) => {
            if (p.name === product) {
                switch (action) {
                    case BasketAction.ADD:
                        p.qty = p.qty + qty;
                        break;
                    case BasketAction.SUB:
                        p.qty = p.qty - qty;
                        break;
                    case BasketAction.REMOVE:
                        p.qty = 0;
                        break;
                }
            }
        })
        const newProdInBasket = prLstFromLocSt.filter(p => p.qty > 0);
        console.log(newProdInBasket.toString())
        this.setState({productsInBasket: newProdInBasket});
        const newBasket: ProductInBasketCollection = {products: newProdInBasket};
        localStorage.setItem("productsInBasket", JSON.stringify(newBasket));
    }

    private async handleMinus(product: string, index: number) {
        this.updateBasket(product, BasketAction.SUB, 1);
        this.setState({
            aniMarker: -1,
            owner: index
        })

    }

    private handleDelete(product: string) {
        this.updateBasket(product, BasketAction.REMOVE, 0);
    }
}

export default FilterPanel;