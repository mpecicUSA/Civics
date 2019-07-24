import React, { Component } from 'react'


export default class Study extends Component {
    
    state = {
        isQuestion: true, 
        qCounter: 1, 
    } 
    _flipCard = (e) => {
        e.preventDefault(); 
        this.setState({isQuestion: !this.state.isQuestion})
    }
    _nextCard = (e) => {
        e.preventDefault();
        this.setState({isQuestion: true})
        if(this.state.qCounter < this.props.questions.length){
            this.setState({qCounter: this.state.qCounter+1})
        }else{
        this.setState({qCounter: 1})
        }
    }

    render() {
    let questions = this.props.questions.filter(item => Number(item.id) === this.state.qCounter)[0]
    let {category, question, answer} = questions
        return (
            <div>
                <h3>
                    Category: {category}
                </h3>
                <p>
                    Q: {question}
                </p>
                <p>
                    A: {this.state.isQuestion ? "..." : answer}
                </p>

                {/* On click of flip card update state isQuestion */}
                <button onClick={this._flipCard}>Flip card</button>
                
                {/* On click qCounter ++  */}
                <button onClick={this._nextCard}>Next question</button>
                {this.props.user.loggedIn ? <button>Skip this question today</button> : undefined }

            </div>
        )
    }
}


// TODO add functionality to skip question today 

