import { Component } from 'react'
import flower from "../product/begonvil.jpg"

import PageWrapper from '../../layouts/pageWrapper';

export default class Outlet extends Component {
    render() {
        const { match } = this.props
        return (
            <PageWrapper match={match}>
                <div class="ui grid">
                    <div class="eight wide column">
                        <img src={flower} className="ui card" />
                    </div>
                  
                </div>
            </PageWrapper>

        )
    }

}