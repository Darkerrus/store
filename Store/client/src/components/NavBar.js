import React, {useContext} from 'react';
import UserStore from "../store/UserStore";
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Link, useHistory} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Link style={{color:"black"}} to={SHOP_ROUTE}>TecStore</Link>
                {user.isAuth ?
                    <Nav>
                        <Button variant={"outline-dark"}
                                onClick={() => history.push(ADMIN_ROUTE)}

                        >
                            Админ панель
                        </Button>

                        <Button variant={"outline-dark"}
                                onClick={() => logOut()}
                                className="ms-lg-4"
                        >
                            Выйти
                        </Button>
                    </Nav>
                :
                    <Nav>
                        <Button variant={"outline-dark"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;