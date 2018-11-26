import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Homepage from '../containers/Homepage';
import CheckIn from '../containers/CheckIn';
import List from '../containers/List';
import Shops from '../containers/Shops';
import Transaction from '../containers/Transaction';

class ContentRouter extends React.Component {
    render(){
        console.log("Switch")
        return (
            <React.Fragment>
                <Switch>
                    {/* <Route component={Homepage} /> */}
                    {/* <Route path="/list" component={List} />
                    <Route path="/shops" component={Shops} />
                    <Route path="/transaction" component={Transaction} /> */}
                    <Route path="/" exact component={CheckIn} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default ContentRouter