import React from 'react';
import ChallengeList from './ChallengeList';
import Menu from './Menu';
import Navigation from './../Navigation';

class Challenges extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuClass: 'challenges__menu'
        };
    }

    onScroll(e) {
        e.preventDefault();
        if (e.target.scrollTop) {
            this.setState({ menuClass: 'challenges__menu_active' });
        } else {
            this.setState({ menuClass: 'challenges__menu' });
        }
    }

    render() {
        return (
            <div className="challenges" onScroll={ e => this.onScroll(e) }>
                <Menu menuClass={ this.state.menuClass } />
                <ChallengeList />
                <Navigation />
            </div>
        );
    }

}

export default Challenges;
