import React, { Component } from 'react';
import Dashboard from './Dashboard';

class Manager extends Component {

    render() {
        return (
            <div>
                <section id="content" className="container">
                    <Dashboard />
                </section>
            </div>
        );
    }
}

export default Manager;
