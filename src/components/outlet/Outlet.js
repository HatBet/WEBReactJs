import { Component } from 'react'
import image from "./phone.jpg"
import flower from "../product/begonvil.jpg"

import PageWrapper from '../../layouts/pageWrapper';

export default class Outlet extends Component {
    render() {
        const { match } = this.props
        return (
            <PageWrapper match={match}>
                <div class="ui grid">
                    <div class="eight wide column">
                        <img src={image} className="ui card" />
                    </div>
                    <div class="eight wide column">
                        <img src={flower} className="ui card" />
                    </div>
                    <div class="ten wide column">
                        <img src={flower} className="ui card" />
                    </div>
                    <div class="six wide column">
                        <img src={image} className="ui card" />
                    </div>
                    <div class="four wide column">test</div>
                    <div class="twelve wide column">test</div>
                    <div class="two wide column">test</div>
                    <div class="fourteen wide column">test</div>
                    <div class="sixteen wide column">test</div>
                </div>
            </PageWrapper>

        )
    }

}