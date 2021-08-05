import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { CategoryList } from "../header/category/CategoryList"

export default class Header extends Component {
    render() {
        const routeComponents = CategoryList.map(
            ({ path, component }, key) => (
              <Route
                exact
                path={path}
                component={component}
                key={`CATEGORY_LINK_${key}`}
              />
            )
          );
        return (<div>{routeComponents}</div>)
    }

}