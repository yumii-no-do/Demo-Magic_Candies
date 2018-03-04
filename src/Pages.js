import React, {Component} from 'react';
import candies from './candiesObj';
import './Pages.css';

class Pages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ovalBig: {
                x: 0,
                y: 0
            },
            ovalMini: {
                x: 0,
                y: 0
            }
        }
    }


    componentWillUpdate() {
        this.div.style.opacity = 1;
    }

    _renderSvg = (name) => {
        switch (name) {
            case 'next-w': {
                return (
                    <svg
                        id="next-w"
                        width="45px"
                        height="54px"
                        viewBox="0 0 45 54"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd">
                            <g
                                id="Desktop"
                                transform="translate(-338.000000, -279.000000)"
                                fill="#FFFFFF">
                                <g
                                    id="Group"
                                    transform="translate(338.000000, 279.000000)">
                                    <rect id="Rectangle1" x="0" y="18" width="18" height="18"></rect>
                                    <rect id="Rectangle2" x="27" y="36" width="18" height="18"></rect>
                                    <rect id="Rectangle3" x="27" y="0" width="18" height="18"></rect>
                                </g>
                            </g>
                        </g>
                    </svg>
                );
            }
            case 'next-b': {
                return (
                    <svg
                        id="next-b"
                        width="45px"
                        height="54px" viewBox="0 0 45 54"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd">
                            <g id="Desktop" transform="translate(-338.000000, -279.000000)" fill="#000000">
                                <g id="Group"
                                   transform="translate(360.500000, 306.000000) scale(-1, 1) translate(-360.500000, -306.000000) translate(338.000000, 279.000000)">
                                    <rect id="Rectangle1" x="0" y="18" width="18" height="18"></rect>
                                    <rect id="Rectangle2" x="27" y="36" width="18" height="18"></rect>
                                    <rect id="Rectangle3" x="27" y="0" width="18" height="18"></rect>
                                </g>
                            </g>
                        </g>
                    </svg>
                );
            }
            default:
                return 0
        }
    };

    goTo = (e) => {
        if (this.props.page === 0) {
            if (e.key === 'ArrowRight') {
                this.props.nextPage();
            }
        } else if (this.props.page === candies[this.props.page].length - 1) {
            if (e.key === 'ArrowLeft') {
                this.props.previousPage();
            }
        } else {
            if (e.key === 'ArrowRight') {
                this.props.nextPage();
            }
            if (e.key === 'ArrowLeft') {
                this.props.previousPage();
            }
        }

    };


    move = (e) => {
        let x = e.clientX;
        let y = e.clientY;
        // console.log(x,y);

        this.setState({
            ovalBig: {
                x: -x / 30,
                y: -y / 30
            },
            ovalMini: {
                x: x / 100,
                y: y / 100
            }
        })

    };


    render() {

        document.addEventListener('mousemove', this.move);

        const elem = candies[this.props.page];

        let controls, body;


        if (this.props.page === 0) {

            controls = (
                <div className='container-controls'>
                    <button style={{visibility: 'hidden'}}></button>
                    <button className="controls-next" onClick={this.props.nextPage}>{this._renderSvg('next-b')}</button>
                </div>);

            body = (
                <div className="container-home" ref={div => this.div = div}>
                    <div className="home" style={{background: elem.color, color: elem.textColor}}>
                        <h1>{elem.title}</h1>
                        <div className='bac-ovalBig' style={{
                            backgroundPositionX: this.state.ovalBig.x,
                            backgroundPositionY: this.state.ovalBig.y
                        }}></div>
                        <div className='bac-ovalMini' style={{
                            backgroundPositionX: this.state.ovalMini.x,
                            backgroundPositionY: this.state.ovalMini.y
                        }}></div>
                    </div>
                </div>
            )


        } else if (this.props.page === candies.length - 1) {

            controls = (
                <div className='container-controls'>
                    <button className="controls-previous"
                            onClick={this.props.previousPage}>{this._renderSvg('next-w')} </button>
                    <button style={{background: candies[0].color, color: candies[0].textColor}}
                            onClick={this.props.goToHome} className='link-home'>
                        <div className='link-home-text-in'><p>Перейти на главную</p>↓</div>
                        <div className='link-home-text-out'>↑</div>
                    </button>
                </div>);

            body = (
                <div className="container-in" ref={div => this.div = div}>

                    <div className="container-img" style={{background: elem.color, color: elem.textColor}}>
                        <h3>{elem.title}</h3>
                        <img className='img' src={elem.img} alt={elem.title}

                        />
                        <div className='bac-ovalBig' style={{
                            backgroundPositionX: this.state.ovalBig.x,
                            backgroundPositionY: this.state.ovalBig.y
                        }}></div>
                        <div className='bac-ovalMini' style={{
                            backgroundPositionX: this.state.ovalMini.x,
                            backgroundPositionY: this.state.ovalMini.y
                        }}></div>
                    </div>
                    <div className="container-text">
                        <p>{elem.text}</p>
                    </div>
                </div>
            )


        } else {

            controls = (
                <div className='container-controls'>
                    <button className="controls-previous"
                            onClick={this.props.previousPage}> {this._renderSvg('next-w')} </button>
                    <button className="controls-next" onClick={this.props.nextPage}>{this._renderSvg('next-b')}</button>
                </div>);

            body = (
                <div className="container-in" ref={div => this.div = div}>

                    <div className="container-img" style={{background: elem.color, color: elem.textColor}}>
                        <h3>{elem.title}</h3>
                        <img className='img' src={elem.img} alt={elem.title}
                        />
                        <div className='bac-ovalBig' style={{
                            backgroundPositionX: this.state.ovalBig.x,
                            backgroundPositionY: this.state.ovalBig.y
                        }}></div>
                        <div className='bac-ovalMini' style={{
                            backgroundPositionX: this.state.ovalMini.x,
                            backgroundPositionY: this.state.ovalMini.y
                        }}></div>
                    </div>
                    <div className="container-text">
                        <p>{elem.text}</p>
                    </div>
                </div>
            )
        }

        document.addEventListener('keydown', this.goTo);


        return (
            <div className="container">
                {/*<ReactCSSTransitionGroup*/}
                {/*transitionName="example">*/}
                {body}
                {controls}
                {/*</ReactCSSTransitionGroup>*/}
            </div>
        )
    }

}

export default Pages;