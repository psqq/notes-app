import * as React from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import CurrentDay from "./components/CurrentDay";
import routes from "./routes";
import Password from "./components/Password";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={routes.currentDay.link()}>Текущий день</Link>
                        </li>
                        <li>
                            <Link to={routes.password.link()}>Пароль</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path={routes.currentDay.pattern} component={CurrentDay}/>
                    <Route exact path={routes.password.pattern} component={Password}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
