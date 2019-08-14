import React, { Component } from 'react'
import Flashcard from '../Components/Flashcard'


export default class Study extends Component {
    
    state = {
        isQuestion: true, 
        qCounter: 0, 
        category: undefined,
        questions: []
    } 
    async componentDidMount(){
        const questionsR = await fetch("http://localhost:8000/questions");
        const q2 = await questionsR.json()
        let notSkipped = q2.filter(question => question.skip == false)
        this.setState({questions: notSkipped})
    }  
    _flipCard = (e) => {
        e.preventDefault(); 
        this.setState({isQuestion: !this.state.isQuestion})
    }
    _nextCard = (e) => {
        e.preventDefault();
        if(this.state.qCounter+1 === this.state.categoryQuestions.length){
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
    _pickACategory = (e) => {
        this.setState({
            categoryQuestions:this.state.questions.filter(question => question.category === e.target.value), 
            category: e.target.value
        })
        
    }
    render() {
        if(this.state.questions.length > 0){
            let categories = [...new Set(this.state.questions.map(question => question.category))]
            return (
                <>
                    <h5>
                        Pick a category:
                    </h5>
                        <select value={this.state.category} onChange={this._pickACategory}> 
                        <option selected disabled>Select A Category</option>
                        {
                            categories.map(item => <option value={item}>{item}</option>)
                        }
                    </select> 
                    {this.state.category ? <>

                    <div className="Primary" >
                        <h1> Category: {this.state.category}</h1>
                        <Flashcard isQuestion={this.state.isQuestion} question={this.state.categoryQuestions[this.state.qCounter]}/>
                        {/* On click of flip card update state isQuestion */}
                        <button onClick={this._flipCard}>Flip card</button>
                        
                        {/* On click qCounter ++  */}
                        <button  onClick={this._nextCard}>Next question</button>
                        {/* {this.props.user.loggedIn ? <button value={this.state.question.id} onClick={this._skipQuestion}>Skip this question today</button> : undefined } */}
                    </div>

                    <div className="Others" >
                        {/* TODO Display other cards like photos under camera roll */}
                        {this.state.categoryQuestions.filter(question => question.id !== this.state.categoryQuestions[this.state.qCounter].id).map(question => <Flashcard isQuestion={false} question={question}/>)}
                    </div>
                    </>
                    : ""}
            </>
        )
    }else{
        return (
            <h1>Loading</h1>
        )
    }
}
}



