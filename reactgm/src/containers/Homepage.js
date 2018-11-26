import React from 'react';
import Shops from './Shops';

class Homepage extends React.Component {
    constructor(props){
        super(props)
        this.toShop = React.createRef();

    }

    scrollToMyRef = () => {
        window.scrollTo({
            top:this.toShop.current.offsetTop, 
            behavior: "smooth"
        })
    }

    render(){
        return (
            <div>
                {/* <h1>Homepage Check</h1>
                <button onClick={() => this.props.history.push("/shops")}>Shops</button> */}
                {/* <Shops refProp={this.toShop}></Shops> */}
            </div>
        )
    }
}

export default Homepage