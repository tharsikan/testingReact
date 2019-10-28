import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             comment:"",
             language:"react"
        }
    }

handilUsernameChange = (event) =>{
    this.setState({
        username: event.target.value
    })
}
handilCommentChange = (event) =>{
    this.setState({
        comment: event.target.value
    })
}
handilLanguageChange = (event) =>{
    this.setState({
        language: event.target.value
    })
}
handilSubmit = (event) =>{
    // alert(`${this.state.username} ${this.state.comment} ${this.state.language}`)
    event.preventDefault()
}
    
    render() {
        return (
            <form onSubmit={this.handilSubmit}>
                <div>  
                    <label>User name</label>
                    <input type="text" value={this.state.username} onChange={this.handilUsernameChange}/>
                </div>
                <div>  
                    <label>Comments</label>
                    <textarea value={this.state.comment} onChange={this.handilCommentChange}/>
                </div>
                <div>  
                    <label>Language</label>
                    <select value={this.state.language} onChange={this.handilLanguageChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="laravel">Laravel</option>
                    </select>
                </div>
                <button type="submit">enter</button>
            </form>
        )
    }
}

export default Form
