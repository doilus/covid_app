import React, {ChangeEvent, FormEvent} from 'react';
import './App.css';
import {IUser} from "./components/Login/IUser";
import Popup from "./ShopComponents/front/Popup";
import {Redirect} from "react-router-dom";

type UserExtd = {
    name: string,
    surname: string,
    email: string,
    number: string,
    street: string,
    zipcode: string,
    city: string;
}
type PanelProps = {
    user: IUser
}

export default class CovidMedicalCheck extends React.Component<PanelProps> {
    state = {
        userExt: undefined,
        redirect: false,
        logginErr: false
    }

    constructor(props: PanelProps) {
        super(props);
        console.log(props);

    }

    componentDidUpdate(prevProps: Readonly<PanelProps>, prevState: Readonly<{}>, snapshot?: any) {
        console.log("componentDidUpdate");
        if (prevProps.user !== this.props.user && !localStorage.getItem("user")) this.setState({logginErr: true})
    }

    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e: FormEvent<any>) => {
        e.preventDefault();
        console.log(JSON.stringify(this.state));
        let wrapper = {
            medicalCheck: null,
        }
    }

    togglePopup() {
        this.setState({
            redirect: true
        });
    }

    componentDidMount() {
        const json: string | null = localStorage.getItem("user");
        const logInfo = localStorage.getItem("logInfo") as string;
        let user: IUser | undefined = undefined;
        if (json != null) {
            user = JSON.parse(json);
            console.log(user);
            // @ts-ignore
            let email: string = user?.credentials.login as string;
            let header = {headers: {'Authorization': logInfo}};
            fetch("http://localhost:8080/user/getInfo/" + email, header)
                .then(resp => {
                    if (resp.status === 200) {
                        console.log("SUCCESSS")
                        return resp.json();
                    } else if (resp.status === 401) {
                        console.log("Unauthorized!!")
                        this.setState({logginErr: true})
                    }
                })
                .then((data) => {
                    this.setState({userExt: data});
                })
                .catch((e) => {
                    console.log("error zlapany!!!");
                    this.setState({logginErr: true})
                });
        }
    }

    render() {
        let name: string = "";
        let surName: string = "";
        let email: string = "";
        let phone: string = "";
        let fieldRO = true;
        if (this.state.userExt !== undefined) {
            //@ts-ignore
            const extUser: UserExtd = this.state.userExt;
            name = extUser.name;
            surName = extUser.surname;
            email = extUser.email;
            phone = extUser.number;
            fieldRO = false;
        }
        let shouldRedirect = this.state.redirect;
        if (shouldRedirect) return (<Redirect to={"/"}/>);
        if (this.state.logginErr) return (<Popup text='Wylogowałes się!' closePopup={this.togglePopup.bind(this)}/>)
        return (<div>
            <main className="mainForm">
                <form onSubmit={this.onSubmit} className="formMedical">
                    <h1 className="headerMedical"> Zapisz się na badania</h1>
                    <h2 className="header2"> Dane personalne</h2>
                    <label htmlFor="name">Nazwa: <abbr title="required" aria-label="required">*</abbr></label>
                    <input readOnly={true} className="nameInput" type="text" name="name"
                           id="name"
                           value={name} required/>
                    <input value={surName} readOnly={true} className="surnameInput" type="text" name="surname"
                           id="surname"
                           required/>

                    <label htmlFor="email">Email: <abbr title="required" aria-label="required">*</abbr></label>
                    <input value={email} readOnly={true} className="emailInput" type="text" name="email"
                           id="email"/>
                    <label htmlFor="phone">Telefon:</label>
                    <input value={phone} readOnly={true} className="phoneInput" type="number" name="phone"
                           id="phone"/>

                    <h2 className="headerDetails"> Wykonanie badania</h2>
                    <label htmlFor="city">Miasto: <abbr title="required" aria-label="required">*</abbr></label>
                    <input onChange={this.onChange} className="cityInput" type="text" name="city" id="city"
                           placeholder="podaj miasto" required/>
                    <label htmlFor="dateCheck">Data: <abbr title="required" aria-label="required">*</abbr></label>
                    <input onChange={this.onChange} className="dateFromInput" type="date" name="dateFrom" id="dateFrom"
                           required/>
                    <input onChange={this.onChange} className="dateToInput" type="date" name="dateTo" id="dateTo"
                           required/>

                    <div className="formButtons">
                        <input readOnly={fieldRO} type="submit" className="formButtonSubmit" value="Zapisz się"/>
                        <a href="" className="formButtonCancel"> Anuluj</a>
                    </div>
                </form>
            </main>
        </div>);
    }
}

