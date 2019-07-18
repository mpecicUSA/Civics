import React, { Component } from 'react'
import Flashcard from "./Flashcard"

export default class Study extends Component {
    state = {
        isQuestion: true, 
        qCounter: 0, 
        Questions: [
            {id: 0, Q: "What is the supreme law of the land?", A: "The Constitution", Category: "Principles of American Democracy", skip: false}, 
            {id: 1, Q: "What does the Constituion do?", A:"Sets up the government,defines the goverment, protects basic rights of Americans",Category: "Principles of American Democracy", skip: false},
            {id: 2, Q: "The idea of self-government is in the first three words of the Constitution.  What are these words? ", A:  "We the people", Category: "Principles of American Democracy", skip: false},
            {id: 3, Q: "What stops one branch of goverment from becoming too powerful", A: "Seperation of powers", Category: "System of Goverment" , skip: false},
            {id: 4, Q: "Who is in charge of the executive branch", A: "The president", Category: "System of Goverment", skip: false}, 
            {id: 5, Q: "Who makes federal laws?", A: "Congress", Category: "System of Goverment", skip: false}
        ]
    }
    _flipCard = (e) => {
        e.preventDefault(); 
        this.setState({isQuestion: !this.state.isQuestion})
    }
    _nextCard = (e) => {
        e.preventDefault();
        this.setState({isQuestion: true})
        if(this.state.qCounter < this.state.Questions.length-1){
            this.setState({qCounter: this.state.qCounter+1})
        }else{
        this.setState({qCounter: 0})
        }
    }
    render() {
        return (
            <div>
                
            <Flashcard 
                question={this.state.Questions[this.state.qCounter].Q} 
                answer={this.state.Questions[this.state.qCounter].A} 
                key={this.state.Questions[this.state.qCounter]} 
                category={this.state.Questions[this.state.qCounter].Category} 
                isQuestion={this.state.isQuestion}
                /> 
                {/* On click of flip card update state isQuestion */}
                <button onClick={this._flipCard}>Flip card</button>
                
                {/* On click qCounter ++  */}
                <button onClick={this._nextCard}>Next question</button>
            </div>
        )
    }
}


// TODO Add skip this question feature