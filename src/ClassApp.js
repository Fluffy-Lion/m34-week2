import React from 'react'

class ClassApp extends React.Component {
    
    state = {
        num: 0
    }
    componentDidMount() {
        console.log("mounted")
        this.setState({ num: + 1 })
    }
    componentDidUpdate() {
        console.log("updated")
    }
    render(){
        return (
            <div>
                <h1>class app</h1>
                <h2>{this.state.num}</h2>
                <button onClick={() => this.setState({ num: this.state.num + 1 })}>
                    add one
                </button>
            </div>
        )
    }
}

export default ClassApp