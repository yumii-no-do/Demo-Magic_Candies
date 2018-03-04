import React, {Component} from 'react';
import Pages from './Pages';
import Menu from './Menu';
import candies from './candiesObj';
import './App.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0
        };
    }

    nextPage = () => {
        this.goToPage(this.state.page + 1);
    };

    previousPage = () => {
        this.goToPage(this.state.page - 1);
    };

    goToPage = (n) => {

        let page = (n + candies.length) % candies.length;
        this.setState({
            page:page
        });
    };
    goTo = (e) => {
        let n = + e.target.dataset.page;

        console.log(n)
        let page = (n + candies.length) % candies.length;
        this.setState({
            page:page
        });
    };

    render() {

        return (
            <div className="App">
                <Menu
                    page={this.state.page}
                    goTo={this.goTo.bind(this)}
                    goTo1={this.goToPage.bind(this,1)}

                > </Menu>
                <Pages
                    page={this.state.page}
                    nextPage={this.nextPage.bind(this)}
                    previousPage={this.previousPage.bind(this)}
                    goToHome={this.goToPage.bind(this,0)}
                > </Pages>
            </div>
        );
    }
}

export default App;
