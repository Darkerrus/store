import React, {useContext} from 'react';
//для логики навигации по страницам (Role)
import {Route, Redirect, BrowserRouter, Switch} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        //По сути тоже что и switch в С
        //ключ = значение, подбираем нужный ключ и его значение
        //и выводим нужную  для авторизированных и нет пользоваетелей
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;