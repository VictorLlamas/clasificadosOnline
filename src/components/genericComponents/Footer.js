import React, { Component } from 'react';
import './styles/footer.css';

class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <span className="text-muted float-right">
                        Clasificados Online &#169;
                        {new Date().getFullYear()}
                    </span>
                </div>
            </footer>
        )
    }
}

export default Footer;