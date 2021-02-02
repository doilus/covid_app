import React from 'react';
import './App.css';
import MenuBar from './MenuBar';
import CovidShop from "./ShopComponents/front/CovidShop";
import CovidFeed from "./CovidFeed";
import CovidNews from "./CovidNews/CovidNews";
import FormMedicalCheck from "./FormMedicalCheck"
import ShopBasket from "./ShopComponents/front/ShopBasket";
import Login from "./Login";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
    const Home = () => (
        <div className="cardWykon">
            <h1 className="wykon">Wykonali:</h1>
            <div className="wykonNames">
                <li> Damian Goraj s18085</li>
                <li> Dominika Ługowska s17226</li>
                <li> Michelle Herok s15474</li>
                <li> Marcin Chojnacki s15074 </li>
            </div>
        </div>
    );
    return (
        <Router>
            <div>
                <MenuBar/>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/feed" component={CovidFeed}></Route>
                    <Route path="/news" component={CovidNews}></Route>
                    <Route path="/shop" component={CovidShop}></Route>
                    <Route path="/medicalcheck" component={FormMedicalCheck}></Route>
                    <Route path="/mybasket" component={ShopBasket}></Route>
                    <Route path="/login" component={Login}></Route>
                </Switch>
            </div>
        </Router>
    );


}

export default App;
