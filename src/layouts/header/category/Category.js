import React, {Component} from 'react'
import { CategoryList } from './CategoryList'
import { Link } from 'react-router-dom'

export default class Category extends Component {
    render() {
        const { match } = this.props;
        console.log(match)
        let rootPath = '';
        const foundedCategory = CategoryList.find(category => category.path === match?.path);
        // if(match.path === "/"){
        //     rootPath = match.path;
        // }
        if (match) {
            rootPath = match.path.split('/')[1];
          }

        return (
            <div>
            <div className="ui inverted menu">
                { CategoryList.map(category => (
                 <Link to={category.path} className="item"
                 key={`CATEGORY_LINK_${category.categoryId}`}>
                 {console.log(category)}
                 {category.categoryName}
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