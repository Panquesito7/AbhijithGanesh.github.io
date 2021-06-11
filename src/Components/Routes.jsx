import React from "react";
import Profile from "./Profile"
import Blog from "./Blog"
import Recom from "./Recom"
import ContactMe from "./ContactMe"
import {
    HashRouter as Router,
    Link,
    Switch,
    Route,
    
} from "react-router-dom";

const RoutingMap = () => {
    return (
        <>
        <Router>
                    <Route  exact path = "/"><Blog/></Route>
                    <Route exact path = "/Profile"><Profile/></Route>
                    <Route exact path = "/ContactMe"><ContactMe/></Route>
                    <Route exact path = "/Recommendations"><Recom/></Route>
            </Router>          
        </>
    )
}

export default RoutingMap