import React from "react";
import {Route} from "react-router-dom";


export const AnonymousRouting = (props) => {
    return <Route path={props.path} {props.component}></Route>;
};
