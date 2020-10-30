import React from "react";
import {shopItems} from "./ShopItems"
import "../css/FilterPanel.css"

class FilterPanel extends React.Component {
    render() {
        return (<div className="filter-panel-back">
                <div className="filter-panel-item">
                    {shopItems.map((item, index) => {
                        return (
                            <ul className="bar">
                                <li key={index} className={item.cName}>
                                    {item.ikon}
                                    {item.Name}
                                </li>
                            </ul>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default FilterPanel;