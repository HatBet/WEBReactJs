import React, { Component } from 'react'
import PageWrapper from '../../layouts/pageWrapper'

export default class Main extends Component {
  
    render() {
        const { match } = this.props;
        return (
            <PageWrapper match={match} >
                <div className="ui raised very padded text container segment">
                    <div className="ui card">
                        <div className="content">
                            <a className="header">Kristy</a>
                            <div className="meta">
                                <span className="date">Joined in 2013</span>
                            </div>
                            <div className="description">
                                Kristy is an art director living in New York.
                            </div>
                        </div>
                        <div className="extra content">
                            <a>
                                <i className="user icon"></i>
                                22 Friends
                            </a>
                        </div>
                    </div>
                    <div className="ui card">
                        <div className="content">
                            <a className="header">Kristy</a>
                            <div className="meta">
                                <span className="date">Joined in 2013</span>
                            </div>
                            <div className="description">
                                Kristy is an art director living in New York.
                            </div>
                        </div>
                        <div className="extra content">
                            <a>
                                <i className="user icon"></i>
                                22 Friends
                            </a>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        )
    }
}