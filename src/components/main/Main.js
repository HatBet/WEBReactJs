import React, { Component } from 'react'
import PageWrapper from '../../layouts/pageWrapper'
import UICard from './UiCard';


const data = [
    {id: 0, username: "Kristean", date: 2010, desc: "Kristy is an art director living in New York.", followers: 22},
    {id: 1, username: "Kris", date: 2015, desc: "Kristy is an art  living in New York.", followers: 22},
    {id: 2, username: "Kristean", date: 2010, desc: "Kristy is an art director living in New York.", followers: 22},
    {id: 3, username: "Kristean", date: 2010, desc: "Kristy is an art director living in New York.", followers: 22},
    {id: 4, username: "Kristean", date: 2010, desc: "Kristy is an art director living in New York.", followers: 22},]

export default class Main extends Component {
  
    render() {
        const { match } = this.props;
        return (
            <PageWrapper match={match} >
                <div className="ui raised very padded text container segment">
                   {
                       data.map(i=>{
                           return(
                               <UICard data={i} key={i.id} />
                           )
                       })
                   }
                </div>
            </PageWrapper>
        )
    }
}