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
            <div style={{backgroundImage: "url('home.png')"}}>
                <img src="home.png" />
            </div>
        )
    }
}

export default Homepage