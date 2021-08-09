import { Component } from "react"
import PageWrapper from "../../layouts/pageWrapper";
import Card from "./Card";
import pictures from "./begonvil.jpg"
import pic2 from "../outlet/phone.jpg"


const cardData = [
    { id: 0, pictures: [ {id: 0, pictures: pictures},{id: 1, pictures: pic2} ], date: 2014, members: 22 },
    { id: 1, pictures: [ {id:0, pictures:pictures}, {id:1, pictures:pictures} ], date: 2015, members: 4 },
    { id: 2, pictures: [ {id:0, pictures:pictures}, {id:1, pictures:pic2}], date: 2016, members: 1 },
    { id: 3, pictures: [ {id:0, pictures:pictures}, {id:1, pictures:pic2}], date: 2013, members: 6 },
    { id: 4, pictures: [ {id:0, pictures:pictures}, {id:1, pictures:pictures}], date: 2019, members: 7 },
    { id: 5, pictures: [ {id:0, pictures:pictures}, {id:1, pictures:pictures}], date: 2029, members: 5 },
    { id: 6, pictures: [ {id:0, pictures:pictures}, {id:1, pictures:pictures}], date: 2009, members: 7 },
    { id: 7, pictures: [ {id:0, pictures:pictures}, {id:1, pictures:pictures}], date: 2019, members: 6 },
]

export default class Product extends Component {
    render() {
        const { match } = this.props
        return (
            <PageWrapper match={match}>
                <div className="ui four column doubling stackable grid container">
                    {
                        cardData.map(data => {
                            return (
                                <Card cardData={data} key={data.id} />
                            )
                        })
                    }
                </div>
            </PageWrapper>
        )

    }
}