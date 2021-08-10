import { Component } from "react"
import { Switch, Route } from "react-router-dom"

export default class Loading extends Component {
    render() {
        const { match } = this.props;
        return (
                <div className="ui active inverted dimmer">
                    <div className="ui text loader">Loading</div>
                    <Switch>
                        <Route path="/loading" Component={Loading} />
                    </Switch>
                </div>
        )
    }

}