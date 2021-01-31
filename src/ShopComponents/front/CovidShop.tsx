import React from 'react';
import FilterPanel from "./FilterPanel";
import ProductPanel from "./ProductPanel";
import "../css/CovidShop.scss"

function CovidShop() {
    return (<div className="CovidShop">
        <FilterPanel/>
        <ProductPanel/>
    </div>);
}

export default CovidShop;