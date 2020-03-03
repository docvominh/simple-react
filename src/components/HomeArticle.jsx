import React, { Component } from 'react';

class HomeArticle extends Component {
  render() {
    return (
        <div id="pageContent">
            <div className="article-list">
                <div className="article-item">
                    <div className="article-image">
                        <a href="#">
                            <img src="https://cdn.dribbble.com/users/168075/screenshots/2656849/ss2-goku.jpg"/>
                        </a>
                    </div>
                    <div className="article-info">
                        <a href="#"><p className="article-title">How to become super Saiyan</p></a>
                        <p className="article-description">It will be hard day for you...</p>
                    </div>

                </div>
            </div>
        </div>
    );
  }
}

export default HomeArticle;
