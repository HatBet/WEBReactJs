import React, { Component } from 'react'

export default class UICard extends Component {
  
    render() {
        const { data } = this.props;
        return (
            <div className="ui card">
                <div className="content">
                    <a className="header">{data.username}</a>
                    <div className="meta">
                        <span className="date">Joined in {data.date}</span>
                    </div>
                    <div className="description">
                        {data.desc}
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="user icon"></i>
                        {data.followers} Friends
                    </a>
                </div>
            </div>
        )
    }
}