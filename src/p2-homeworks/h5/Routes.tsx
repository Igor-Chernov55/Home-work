import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "../../p1-main/m1-ui/u1-app/Junior";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    NOT_FOUND: '/error-404',
    JUNIOR: '/junior'
    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                // add routes

                <Route path={PATH.JUNIOR} render={() => <Junior />}/>
            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route path={PATH.NOT_FOUND} render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
