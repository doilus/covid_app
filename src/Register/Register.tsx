import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import {Done} from "@material-ui/icons";
import '../Login/LoginRegister.scss';


const Register = () => {

    return(
        <div>
            <Container className="register-container col-md-5">
                <Row className="justify-content-md-center">
                    <Col sm={6}>
                        <h1>Register</h1>
                        <hr/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm={6}>
                        <FormControl>
                            <InputLabel>Username</InputLabel>
                            <Input
                              //  error={values.loginError}
                                id="username"
                                type="text"
                               // value={values.username}
                              //  onChange={handleChange('username')}
                            />
                        </FormControl>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm={6}>
                        <FormControl>
                            <InputLabel>Password</InputLabel>
                            <Input
                              //  error={values.loginError}
                                id="password"
                              //  type={values.showPassword ? 'text' : 'password'}
                               // value={values.password}
                               // onChange={handleChange('password')}
                            />
                        </FormControl>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{marginTop: "20px"}}>
                    <Col sm={3}>
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<Done>login</Done>}
                        //    onClick={handleLogin}
                        >
                            Send
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Register;