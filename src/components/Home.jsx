import React, { Component } from 'react';
import HomeArticle from './HomeArticle';
import Aside from './Aside';


class Home extends Component {

    render() {
        return (
            <div>
                <section id="content" className="container">
                    <div id="main">
                        <HomeArticle />
                    </div>
                    <div id="aside">
                        <Aside />
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
