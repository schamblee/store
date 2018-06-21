import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import Products from './products'
import {fetchItems} from '../actions/items';
import Header from './header'
import Footer from './footer'

export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Route exact path="/" component={Products} />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({

});


export default withRouter(connect(mapStateToProps)(App));