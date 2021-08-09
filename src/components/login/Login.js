import { Component } from "react"
import PageWrapper from "../../layouts/pageWrapper"

export const routes = {
    login:{
        path:'/login',
        title:"Login"
    },
    index:{
        path:'/',
        title:"admin"
    }
}

export default class Login extends Component {
    
    render() {
        const { match } = this.props;
        return (
            <PageWrapper match={match}>
                <div className="ui raised very padded text container segment">
                    <div class="ui placeholder segment">
                        <div class="ui two column very relaxed stackable grid">
                            <div class="column">
                                <div class="ui form">
                                    <div class="field">
                                        <label>Username</label>
                                        <div class="ui left icon input">
                                            <input type="text" placeholder="Username"/>
                                            <i class ="user icon"></i>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label>Password</label>
                                        <div class="ui left icon input">
                                            <input type="password"/>
                                            <i class ="lock icon"></i>
                                        </div>
                                    </div>
                                    <div class="ui blue submit button">Login</div>
                                </div>
                            </div>
                            <div class="middle aligned column">
                                <div class="ui big button">
                                    <i class="signup icon"></i>
                                    Sign Up
                                </div>
                            </div>
                        </div>
                        <div class="ui vertical divider">
                            Or
                        </div>
                    </div>
                </div>
            </PageWrapper>

        )
    }
}