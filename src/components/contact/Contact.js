import React, { Component } from 'react'
import PageWrapper from '../../layouts/pageWrapper';

export default class Contact extends Component {
    render() {
        const { match } = this.props;
        return (
            <PageWrapper match={match}>
                <div className="ui raised very padded text container segment">
                    <form className="ui form attached fluid segment">
                        <div className="two fields">                  
                            <div className="field">
                                <label>First Name </label>
                                <input placeholder="First Name" type="text"/>
                            </div>
                            <div className="field">
                                <label>Last Name</label>
                                <input placeholder="Last Name" type="text"/>
                            </div>
                        </div>
                        <div className="field">
                            <label>Message</label>
                            <input placeholder="message" type="text"/>
                        </div>
                        <div className="ui blue submit button">Gönder</div>
                    </form>
                </div>
            </PageWrapper>
        )

    }
}