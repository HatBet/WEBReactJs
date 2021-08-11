import { Component } from 'react'
import "../../App.css"
import flower from "../product/begonvil.jpg"

import PageWrapper from '../../layouts/pageWrapper';

export default class Outlet extends Component {
    render() {
        const { match } = this.props
        return (
            <PageWrapper match={match}>
                <div className="ui grid">
                    <div className="eight wide column">
                        <img src={flower} className="ui card" />
                        <p> </p>
                    </div>
                    <div className="eight wide column">
                        <img src={flower} className="ui card" />
                        <p> </p>
                    </div>
                    <div className="eight wide column">
                        <img src={flower} className="ui card" />
                        <p> </p>
                    </div>
                    <div className="eight wide column">
                        <img src={flower} className="ui card" />
                        <p></p>
                    </div>
                </div>
            </PageWrapper>

        )
    }

}