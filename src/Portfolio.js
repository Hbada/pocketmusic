import React, { Component } from 'react';
import Pokedex from './Pokedex';

var selectSound = require('./img/EmilyBlog.png');
var turnOff = require('./img/GhoulGame.png');

class Portfolio extends Component {
    static defaultProps = {
        projects1 : [
            { id: 1, name: 'Turn on', type: 'Put AAA batteries in. If already done, press a button to wake device up.', altText: '' },
            { id: 2, name: 'Select sound', type: 'Press number 1 to 16 to select a sound. Start a pattern first if you want to play along.', img: selectSound, altText: '' },
            { id: 3, name: 'Set volume', type: 'Press BPM + any numbered key 1 to 16. Low is 1, max is 16.', altText: '' },
            { id: 4, name: 'Play pattern', type: 'Hold Pattern + number 1 to 16 to select pattern, then Play to play it.', altText: '' },
            { id: 5, name: 'Turn off', type: 'Press sound + BPM at same time', img: turnOff },
            { id: 6, name: '', type: '' }
        ],
        projects2 : [
            { id: 1, name: 'Turn on', type: 'Put AAA batteries in. If already done, press a button to wake device up.', year: 2018, base_experience: 1, altText: '' },
            { id: 2, name: 'Select sound', type: 'Press number 1 to 16 to select a sound. Start a pattern first if you want to play along.', year: 2019, base_experience: 1, img: EmilyBlog, altText: '' },
            { id: 3, name: 'Set volume', type: 'Press BPM + any numbered key 1 to 16. Low is 1, max is 16.', year: 2019, base_experience: 1, altText: '' },
            { id: 4, name: 'Play pattern', type: 'Hold Pattern + number 1 to 16 to select pattern, then Play to play it.', year: 2016, base_experience: 1, altText: '' },
            { id: 5, name: 'Turn off', type: 'Press sound + BPM at same time', year: 2018, base_experience: 1, img: GhoulGame },
            { id: 6, name: '', type: '', year: 2019, base_experience: 1 }
        ]
    };

    render() {
        let hand1 = [...this.props.projects1 ];
        let hand2 = [...this.props.projects2 ];
        // while( hand1.length < hand2.length ) {
            // let randIdx = Math.floor(Math.random() * hand2.length);
            // let randprojects = hand2.splice(randIdx, 1)[0];
            // hand1.push(randprojects);
        // }
        // let exp1 = hand1.reduce((exp, projects) => exp + projects.base_experience, 0);
        // let exp2 = hand2.reduce((exp, projects) => exp + projects.base_experience, 0);
        return (
            <div>
                <h2>Start</h2>
                <Pokedex projects={hand1} /*exp={exp1} isWinner={ exp1 > exp2 }*/ />
                <h2>Patterns</h2>
                <Pokedex projects={hand2} /*exp={exp2} isWinner={ exp2 > exp1 }*/ />
            </div>
        );
    }
}

export default Portfolio;