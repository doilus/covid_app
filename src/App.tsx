import React, {useState} from 'react';
import './App.css';
import MenuBar from './MenuBar';
import CovidShop from "./ShopComponents/front/CovidShop";
import CovidFeed from "./CovidFeed";
import CovidNews from "./CovidNews/CovidNews";
import FormMedicalCheck from "./FormMedicalCheck"
<<<<<<< HEAD
=======
import ShopBasket from "./ShopComponents/front/ShopBasket";
>>>>>>> DamGorEx-master
import Login from "./Login";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {IUser} from "./components/Login/IUser";
import Panel from "./components/LoginPanel/Panel";
import Register from "./components/Register/Register";
import {useSnackbar} from "notistack";


const App = () => {
    const [user, setUser] = useState<IUser | undefined>(undefined);
    const {enqueueSnackbar} = useSnackbar();
    const logout = () => {
        setUser(undefined);
        enqueueSnackbar('You have been logged out!', {variant: 'info'});
    }
    const Home = () => (
        <div className="cardWykon">
            <h1 className="wykon">Wykonali:</h1>
            <div className="wykonNames">
                <li> Damian Goraj s18085</li>
                <li> Dominika �ugowska s17226</li>
                <li> Michelle Herok s15474</li>
                <li> Marcin Chojnacki s15074 </li>
            </div>
        </div>
    );
    return (
        <Router>
            <div>
                <MenuBar user={user} logout={logout}/>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/feed" component={CovidFeed}></Route>
                    <Route path="/news" component={CovidNews}></Route>
                    <Route path="/shop" component={CovidShop}></Route>
                    <Route path="/medicalcheck" component={FormMedicalCheck}></Route>
<<<<<<< HEAD
=======
                    <Route path="/mybasket" component={ShopBasket}></Route>
>>>>>>> DamGorEx-master
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" exact component={Home}/>
                    <Route path="/feed" component={CovidFeed}/>
                    <Route path="/news" component={CovidNews}/>
                    <Route path="/shop" component={CovidShop}/>
                    <Route path="/panel" render={() => <Panel user={user!}/>}/>
                    <Route path="/login" render={() => <Login setUser={setUser}/>}/>
                    <Route path="/register" render={() => <Register/>}/>
                </Switch>
            </div>
        </Router>
    );


}

export default App;
