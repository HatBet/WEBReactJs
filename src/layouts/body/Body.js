import { Component } from "react"


export default class Body extends Component {
    
    state = { currentCategory: "" }
    changeCategory = category => {
        this.setState({ currentCategory: category.categoryName })
    }
    render() {
        return (
            <div>

            </div>

        )

    }
}