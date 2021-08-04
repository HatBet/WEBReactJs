import { Component } from "react"

import Category from "../header/category/Category"

export default class PageWrapper extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const{match, children} = this.props;
        return(
            <div>
                <Category match={match}/>
                {children}
            </div>
        )
    }
}