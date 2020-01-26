import React from 'react';
import { render } from 'react-dom';
import Spinner from 'react-spinkit';
import './Rand.css';
import getData  from './Data.js';

const randomed=[];
class Rand extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { type:"Hello",number:-1, message: "WELCOME TO DTM TRUTH OR DARE RANDOMIZER :)" };
  }

  handleClick() {
    const data = getData();
    this.setState({ type: "load" });
    
    setTimeout(() => {
        const min = 0;
        const max = 25;
        var correct=false;
        var rand=-1;
        while(!correct){ 
            rand = Math.round(min + Math.random() * (max - min));
            for(var i=0;i<randomed.length;i++){
                if(rand===randomed[i]){
                    correct=true;
                    console.log(rand)
                    break;
                }
            }
            if(correct===true)correct=false;
            else {
                correct=true;
                randomed.push(rand);
            }
            console.log(randomed);
        }
        Promise.all(data).then(()=>{
            this.setState({ type:data[rand].key.toUpperCase() ,number: rand, message: data[rand].message });
        })   
    },2000);
   }

  render() {
    return (
      <div className="rand_container">
        <button className="rand_button"
         onClick={this.handleClick.bind(this)}>
         Start
        </button>
        <div className="rand_result">
            {this.state.type ==="load" ? (
                <Spinner className="load" color="lightblue" name="Salim Hartono" fadeIn="quarter" />
            ) : (
                <div className="rand_message">
                    {this.state.number  ===-1 ? (
                        console.log("lalala")
                    ) : (
                        <h4>{this.state.number+1}</h4>
                    )}
                    <h3>{this.state.type}</h3>
                    <p>{this.state.message}</p>
                </div>
            )}
        </div>
      </div>
    );
  }
}

export default Rand;