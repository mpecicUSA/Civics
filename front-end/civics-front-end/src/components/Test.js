import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        Principles:[
            {Q:"What is the supreme law of the land?", A: "The Constitution"}, 
            {Q:"What does the Constituion do?", A:"Sets up the government,defines the goverment, protects basic rights of Americans"},
            {Q: "The idea of self-government is in the first three words of the Constitution.  What are these words? ", A:  "We the people"}
    ],
        Systems:[
            {Q: "What stops one branch of goverment from becoming too powerful", A: "Seperation of powers" },
            {Q: "Who is in charge of the executive branch", A: "The president"}, 
            {Q: "Who makes federal laws?", A: "Congress"}
        ]
    }
    render() {
        return (
            <>
                <h1>This page is under construction, please come back later</h1>
            </>
        )
    }
}
