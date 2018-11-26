import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Test from '../containers/Test';
import Homepage from '../containers/Homepage';
import CheckIn from '../containers/CheckIn';
import List from '../containers/List';
import Shops from '../containers/Shops';

class ContentRouter extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Switch>
                    <Route component={Homepage} />
                    <Route path="/test" component={Test} />
                    <Route path="/check-in" component={CheckIn}/>
                    <Route path="/list" component={List} />
                    <Route exact path="/" component={Homepage} />
                    {/* <Route path="/test" component={Test} /> */}
                    <Route path="/shops" component={Shops} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default ContentRouter