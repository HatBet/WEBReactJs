import { Component } from "react"
import PageWrapper from "../../layouts/pageWrapper";
import Card from "./Card";


const cardData = [
    { id: 0, pictures: "flower", date: 2014, members: 22 },
    { id: 1, pictures: "flower", date: 2015, members: 4 },
    { id: 2, pictures: "flower", date: 2016, members: 1 },
    { id: 3, pictures: "flower", date: 2013, members: 6 },
    { id: 4, pictures: "flower", date: 2019, members: 7 },
    { id: 5, pictures: "flower", date: 2019, members: 7 },
    { id: 6, pictures: "flower", date: 2019, members: 7 },
    { id: 7, pictures: "flower", date: 2019, members: 7 },
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