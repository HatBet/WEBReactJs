
import Product from "../../../components/product/Product"
import Contact from "../../../components/contact/Contact"
import Main from "../../../components/main/Main"
import Outlet from "../../../components/outlet/Outlet"


export const CategoryType ={
    ANA: 'ana'
};

export const CategoryList = [
    {
        categoryId: 0,
        categoryName: "Ana Sayfa",
        CategoryType: CategoryType.ANA,
        path: '/',
        component: Main
    },
    {
        categoryId: 1,
        categoryName: "İletişim",
        CategoryType: CategoryType.ANA,
        path: '/contact',
        component:Contact
    },
    {
        categoryId: 2,
        categoryName: "Ürünler",
        CategoryType: CategoryType.ANA,
        path: '/product',
        component: Product
    },
    {
        categoryId: 3,
        categoryName: "Outlet",
        CategoryType: CategoryType.ANA,
        path: '/outlet',
        component: Outlet
    }
];

