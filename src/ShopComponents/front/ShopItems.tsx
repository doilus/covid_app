import React from 'react';
import {GiGasMask, GiMedicinePills, GiSpiralBottle, ImBooks} from "react-icons/all";

export const shopItems =
    [
        {
            Name: "Maseczki",
            action: callItems("Maseczki"),
            ikon: <GiGasMask/>,
            cName: "nav-text"
        },
        {
            Name: "Artykuły do dezynfekcji",
            action: callItems("Dezynfekcja"),
            ikon: <GiSpiralBottle/>,
            cName: "nav-text"
        },
        {
            Name: "Suplementy",
            action: callItems("Suplemeny"),
            ikon: <GiMedicinePills/>,
            cName: "nav-text"
        },
        {
            Name: "Książki",
            action: callItems("Ksiazki"),
            ikon: <ImBooks/>,
            cName: "nav-text"
        }
    ];

function callItems(name: string) {
    return "aaa";
}


