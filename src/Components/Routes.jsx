import React from "react";
import Profile from "./Profile"
import Blog from "./Blog"
import Recom from "./Recom"
import ContactMe from "./ContactMe"
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    HashRouter,
} from "react-router-dom";

const RoutingMap = () => {
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route  exact path = "/" component = {Blog}></Route>
                    <Route  exact path = "/Profile" component = {Profile}></Route>
                    <Route  exact path = "/ContactMe" component = {ContactMe}></Route>
                    <Route exact path = "/Recommendations" component = {Recom}></Route>
                </Switch>
            </HashRouter>
            
        </>
    )
}

export default RoutingMap