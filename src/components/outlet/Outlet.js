import { Component } from 'react'
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
                    </div>
                    <div className="eight wide column">
                        <img src={flower} className="ui card" />
                    </div>
                    <div className="eight wide column">
                        <img src={flower} className="ui card" />
                    </div>
                    <div className="eight wide column">
                        <img src={flower} className="ui card" />
                    </div>
                  
                </div>
            </PageWrapper>

        )
    }

}