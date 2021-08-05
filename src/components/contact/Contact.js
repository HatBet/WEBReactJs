import React, { Component } from 'react'
import PageWrapper from '../../layouts/pageWrapper';

export default class Contact extends Component {
    render() {
        const { match } = this.props
        return (
            <PageWrapper match={match}>
                <div className="ui raised very padded text container segment">
                    <form class="ui form attached fluid segment">
                        <div class="two fields">
                           
                            <div class="field">
                                <label>First Name </label>
                                <input placeholder="First Name" type="text"/>
                            </div>
                            <div class="field">
                                <label>Last Name</label>
                                <input placeholder="Last Name" type="text"/>
                            </div>
                        </div>
                        <div class="field">
                            <label>Message</label>
                            <input placeholder="message" type="text"/>
                        </div>
                     
                       
                        <div class="ui blue submit button">Gönder</div>
                    </form>
                   
                </div>
            </PageWrapper>
        )

    }
}