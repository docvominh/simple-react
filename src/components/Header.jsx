import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            links: this.props.links
        }
    }

    render() {
        const LOGO = '/logo.png';
        const renderLinks = this.state.links.map((link, index) => {
            return (
                <li className="nav-menu-item" key={link.key}>
                    <Link to={link.url} className="nav-link">{link.name}</Link>
                </li>
            )
        })

        return (
            <header id="header" className="page-header">
                <nav className="container">
                    <Link to="" className="logo">
                        <img src={LOGO} width="65px" />
                    </Link>

                    <ul className="nav-menu">
                        {renderLinks}
                    </ul>

                    <ul className="nav-menu">
                        <li className="nav-menu-item">
                            <Link to="/login" className="nav-link-login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </header >
        );
    }
}

export default Header;
