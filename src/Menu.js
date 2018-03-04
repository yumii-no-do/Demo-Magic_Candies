import React, {Component} from 'react';
import candies from './candiesObj';
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            obj: ''
        }
    }

    menu = () => {

        this.setState({
            open: !this.state.open
        })

    };

    go = (e) => {
        this.props.goTo(e);
        this.setState({
            open: !this.state.open
        })
    };
    over = (e) => {

        this.setState({
            obj: candies[e.target.dataset.page]
        });

    };
    svg = () => {

        const y1 = this.state.open === true ? 22 : 0;
        const x1 = this.state.open !== true ? 22 : 0;

        return (
            <svg
                id='menu-svg'
                width="40px"
                height="40px"
                viewBox="0 0 40 40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1"
                   stroke="none"
                   strokeWidth="1"
                   fill="none"
                   fillRule="evenodd">
                    <g id="Desktop" transform="translate(-533.000000, -287.000000)" fill="#FFFFFF">
                        <g id="Group-3" transform="translate(533.000000, 287.000000)">
                            <rect id="menu1" x="22" y="0" width="18" height="18"></rect>
                            <rect id="menu2" x={x1} y="22" width="18" height="18"></rect>
                            <rect id="menu3" x="0" y={y1} width="18" height="18"></rect>
                        </g>
                    </g>
                </g>
            </svg>
        )
    };

    render() {


        const body = candies.map((elem, i) => {
            if(this.props.page === i){
                return (
                    <div className='menu-item select' key={i} data-page={i} onMouseEnter={this.over}
                         onClick={this.go}>{elem.title}</div>
                )
            }
            return (
                <div className='menu-item' key={i} data-page={i} onMouseEnter={this.over}
                     onClick={this.go}>{elem.title}</div>
            )

        });
        const menu = this.state.open === true ? (<div>
            <div className='menu-links'>
                {body}
            </div>

            <div className='menu-img'>
                <img
                    src={this.state.obj.img}
                    alt={this.state.obj.title}

                />

            </div>
        </div>) : null;


        return (
            <div className='menu'>
                <button className='menu-btn' onClick={this.menu}>{this.svg()}</button>
                {menu}

            </div>
        );
    }


}

export default Menu;