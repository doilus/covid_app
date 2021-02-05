import React, {ChangeEvent, FormEvent} from 'react';
import './App.css';

export default class CovidMedicalCheck extends React.Component {

    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit = (e: FormEvent<any>) => {
        e.preventDefault();
        console.log(JSON.stringify(this.state));
    }

    render() {
        return (<body>
              <div id="container">
          
                  <div className="text-welcome">
                      ZAPISZ SIĘ NA BADANIA
                  </div>
          
                  <div className="wizyta-dane">
                        <p className="wizyta-dane-headers">DANE PERSONALNE</p>
                 </div>
          
                 <div className="title-space"></div>
          
                 <form onSubmit={this.onSubmit}>
                        <div className="wizyta-dane-input">
                               <div className="wizyta-dane-input-name">
                                      <label htmlFor="name">NAZWA: <abbr title="required" aria-label="required">*</abbr></label>
                                      <div className="space-between-input"></div>
                                      <label htmlFor="dateOfBirth">DATA URODZENIA: <abbr title="required" aria-label="required">*</abbr></label>
                                      <div className="space-between-input"></div>
                                      <label htmlFor="email">EMAIL: <abbr title="required" aria-label="required">*</abbr></label>
                                      <div className="space-between-input"></div>
                                      <label htmlFor="phone">TELEFON:</label>
                                      <div className="space-between-input"></div>
                                      <label htmlFor="address">ADRES:</label>
          
                               </div>
                               <div className="wizyta-dane-input-value">
                                      <input onChange={this.onChange} className="name-input" type="text" name="name" id="name" placeholder="podaj imie" required/>
                                      <input onChange={this.onChange} className="name-input-nazwisko" type="text" name="surname" id="surname" placeholder="podaj nazwisko" required/>
                                      <div className="space-between-input"></div>
                                      <input onChange={this.onChange} className="name-input" type="date" name="date" id="date" placeholder="podaj date urodzenia" required/>
                                      <div className="space-between-input"></div>
                                      <input onChange={this.onChange} className="name-input" type="text" name="email" id="email"
                                      placeholder="podaj adres e-mail"/>
                                      <div className="space-between-input"></div>
                                      <input onChange={this.onChange} className="name-input" type="number" name="phone" id="phone"
                                      placeholder="podaj numer telefonu"/>
                                      <div className="space-between-input"></div>
                                      <input onChange={this.onChange} className="name-input" type="text" name="street" id="street"
                                      placeholder="podaj adres"/>
                               </div>
                        </div>
                        
                        <div className="title-space"></div>
                        <div className="title-space"></div>
          
                        <div className="wizyta-dane">
                               <p className="wizyta-dane-headers">WYBIERZ TERMIN WIZYTY</p>
                        </div>
          
                        <div className="title-space"></div>
          
                        <div className="wizyta-dane-input">
                               <div className="wizyta-dane-input-name">
                                      <label htmlFor="city">MIASTO: <abbr title="required" aria-label="required">*</abbr></label>
                                      <div className="space-between-input"></div>
                                      <label htmlFor="dateCheck">DATA: <abbr title="required" aria-label="required">*</abbr></label>
                               </div>
                               <div className="wizyta-dane-input-value">
                                      <input onChange={this.onChange} className="name-input" type="text" name="city" id="city" placeholder="podaj miasto" required/>
                                      <div className="space-between-input"></div>
                                      <input onChange={this.onChange} className="name-input" type="date" name="dateFrom" id="dateFrom" required/>
                                      <input onChange={this.onChange} className="name-input-nazwisko" type="date" name="dateTo" id="dateTo" required/>
                               </div>
                        </div>
          
                        <div className="title-space"></div>
                        <div className="title-space"></div>
          
                        <div className="form-buttons">
                                  <input type="submit" className="form-button-submit" value="ZAPISZ SIĘ"/>
                                  <a href="" className="form-button-cancel">ANULUJ</a>
                        </div>
          
                 </form>
                  
          
                  <div className="footer">
                      <div className="footerTop">
                          CONTENT MANAGEMENT SYSTEM - PJATK
                      </div>
          
                      <div className="footerBottom">
                          <div className="footerBottomLeft">
                              <a href="link1.html" className="footerOption"> LINK1 </a><div className="pStyle3"></div>
                              <a href="link2.html" className="footerOption"> LINK2 </a><div className="pStyle3"></div>
                              <a href="link3.html" className="footerOption"> LINK3 </a><div className="pStyle3"></div>
                              <a href="link4.html" className="footerOption"> LINK4 </a><div className="pStyle3"></div>
                          </div>
                          <div className="footerBottomRight">
                              DOMINIKA ŁUGOWSKA <div className="pStyle3"></div>
                              MICHELLE HEROK <div className="pStyle3"></div>
                              DAMIAN GORAJ <div className="pStyle3"></div>
                              MARCIN CHOJNACKI
                          </div>
                      </div>
          
                  </div>
          
              </div>
          
          </body>);
    }
}

