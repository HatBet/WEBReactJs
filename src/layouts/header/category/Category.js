import React, { Component } from 'react'
import { CategoryList } from './CategoryList'
import { Link } from 'react-router-dom'


export default class Category extends Component {

    render() {
        const { match } = this.props;
        let rootPath = '';
        const foundedCategory = CategoryList.find(category => category.path === match?.path);
        if (match) {
            rootPath = match.path.split('/')[1];
        }

        return (
            <div>
                <div ip="menu header" className="ui inverted menu">
                    {CategoryList.filter(category => category.CategoryType !== rootPath).map(category => (
                        <Link to={category.path} className=" right item"
                            key={`CATEGORY_LINK_${category.categoryId}`}>
                            <h4> {category.categoryName}</h4>
                        </Link>
                    ))}
                </div>
                <div>
                    <h2 className="ui header">{foundedCategory?.categoryName}</h2>
                </div>
            </div>
        )

    }
}