import { Component } from "react"

import PageWrapper from "../../layouts/pageWrapper/index"

export default class index extends Component {

    render() {
     
        return (
            <PageWrapper match={match}>
                <div  className="ui container">
                index
                </div>
            </PageWrapper>
        )
    }
}