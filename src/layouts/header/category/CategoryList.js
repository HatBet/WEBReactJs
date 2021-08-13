
import Product from "../../../components/product/Product"
import Contact from "../../../components/contact/Contact"
import Main from "../../../components/main/Main"
import Outlet from "../../../components/outlet/Outlet"
import Login from "../../../components/login/Login"


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
        categoryName: "Ürünler",
        CategoryType: CategoryType.ANA,
        path: '/product',
        component: Product
    },
    {
        categoryId: 2,
        categoryName: "Ürün Ekleme",
        CategoryType: CategoryType.ANA,
        path: '/productlist',
        component: Outlet 
    },
    {
        categoryId: 3,
        categoryName: "İletişim",
        CategoryType: CategoryType.ANA,
        path: '/contact',
        component: Contact
    },
    {
        categoryId:6,
        categoryName:"Giriş Yap",
        CategoryType:CategoryType.ANA,
        path:'/login',
        component:Login,
    }
];

