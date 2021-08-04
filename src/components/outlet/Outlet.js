import { Component } from 'react'
import PageWrapper from '../../layouts/pageWrapper';

export default class Outlet extends Component {
    render() {
        const { match } = this.props
        return (
            <PageWrapper match={match}>
                <div></div>
            </PageWrapper>

        )
    }

}