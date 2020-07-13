import React, { Component } from 'react';
import Projectcard from './Projectcard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        let title;
        // if(this.props.isWinner) {
        //     title = <h1 className="Pokedex-winner">Web and game development</h1>;
        // } else {
        //     title = <h1 className="Pokedex-loser">Data analysis and data science</h1>;
        // };
        return (
            <div className="Pokedex">
                <h1>{title}</h1>
                {/* <h4>Total projects: {this.props.exp}</h4> */}
                <div className="Pokedex-cards">
                    {this.props.projects1.map((p) => (
                        <Projectcard img={p.img} name={p.name} type={p.type} />
                    ))}
                    {this.props.projects2.map((p) => (
                        <Projectcard img={p.img} name={p.name} type={p.type} />
                    ))}
                </div>  
            </div>
        );
        
    }
}

export default Pokedex;