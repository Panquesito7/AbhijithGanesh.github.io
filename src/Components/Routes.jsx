import React from "react";
import Profile from "./Profile"
import Blog from "./Blog"
import Recom from "./Recom"
import ContactMe from "./ContactMe"
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const RoutingMap = () => {
    return (
        <>
            
                <Switch>
                    <Route  exact path = "/" component = {Blog}></Route>
                    <Route path = "/Profile" component = {Profile}></Route>
                    <Route path = "/ContactMe" component = {ContactMe}></Route>
                    <Route path = "/Recommendations" component = {Recom}></Route>
                </Switch>
            
        </>
    )
}

export default RoutingMap