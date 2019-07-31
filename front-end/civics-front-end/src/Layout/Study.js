import React, { Component } from 'react'


export default class Study extends Component {
    
    state = {
        isQuestion: true, 
        qCounter: 0
    } 
    async componentDidMount(){
        const questionsR = await fetch("http://localhost:8000/questions");
        const q2 = await questionsR.json()
        let notSkipped = q2.filter(question => question.skip === false)
        this.setState({questions: notSkipped})
    }  
    _flipCard = (e) => {
        e.preventDefault(); 
        this.setState({isQuestion: !this.state.isQuestion})
    }
    _nextCard = (e) => {
        e.preventDefault();
        if(this.state.qCounter+1 ==this.state.questions.length){
            this.setState({
                qCounter: 0,
                isQuestion: true
            })
        }else{
        this.setState({
            qCounter: (this.state.qCounter)+1, 
            isQuestion: true
        })
        }
    }
    _skipQuestion = (e) => {
        e.preventDefault(); 
    }

    render() {
        if(this.state.questions){
            // go through questions filter out only questions that are not skipped
            let {category, question, answer, id} = this.state.questions[this.state.qCounter]
            return (
                <div>
                <h3>
                    Category: {category}
                </h3>
                <p>
                    Q: {question}?
                </p>
                <p>
                    A: {this.state.isQuestion ? "..." : answer}
                </p>

                {/* On click of flip card update state isQuestion */}
                <button onClick={this._flipCard}>Flip card</button>
                
                {/* On click qCounter ++  */}
                <button  onClick={this._nextCard}>Next question</button>
                {this.props.user.loggedIn ? <button value={id} onClick={this._skipQuestion}>Skip this question today</button> : undefined }
                {/* TODO Display other cards like photos under camera roll */}
            </div>
        )
    }else{
        return (
            <h1>Loading</h1>
        )
    }
}
}



