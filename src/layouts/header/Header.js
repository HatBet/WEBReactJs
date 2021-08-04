import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'


import { CategoryList } from "../header/category/CategoryList"
import Main from "../../components/main/Main"
import Contact from '../../components/contact/Contact'
import Product from '../../components/product/Product'
import Outlet from '../../components/outlet/Outlet'


export default class Header extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/product" component={Product} />
                <Route exact path="/outlet" component={Outlet} />




                {/* {
                    CategoryList.map(category =>
                        <Route
                            key={`CATEGORY_LINK_${category.categoryId}`}
                            path={category.path}
                            component={category.component}
                        />
                    )
                } */}
            </Switch>

        )
    }

}