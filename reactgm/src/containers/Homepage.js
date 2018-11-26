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
                <img src=""></img>
            </div>
        )
    }
}

export default Homepage