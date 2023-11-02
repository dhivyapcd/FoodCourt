import React from 'react'
import { Routes, Route,Navigate} from 'react-router-dom';

import Auth from './Auth';
import MealProviderWrapper from './components/provider/MealProviderWrapper';
import { BrowserRouter } from 'react-router-dom';
const Header = React.lazy(() =>
    import('./components/common/Header')) 
const Menu = React.lazy(() =>
    import('./components/Recipe/Menu/Menu'))
const SignUpForm = React.lazy(() =>
    import('./components/SignUp/signup'))
const LoginForm = React.lazy(() =>
    import('./components/Login/login'))
const RecipeDetails = React.lazy(() =>
    import('./components/Recipe/Recipe/Details/RecipeDetails'))
const AddRecipe = React.lazy(() =>
    import('./components/Recipe/Recipe/AddRecipe'))
const Cart = React.lazy(() =>
    import('./components/cart/cart'))
const Wish = React.lazy(() =>
    import('./components/wish/wish'))
const Order = React.lazy(() =>
    import('./components/order/order'))
const OrderCard = React.lazy(() =>
    import('./components/order/OrderCard'))

const Routers = () => (
    <MealProviderWrapper>
    <BrowserRouter>
    <Header/>
    <Routes>        
        <Route path='/' exact element={<LoginForm/>} />
        <Route path='/home' element={<Menu/>} />
        {/* <Route path='/about' element={About} /> */}
        <Route path='/sign-up' element={<SignUpForm/>} />
        <Route path='/sign-in' element={<LoginForm/>} />
        <PrivateRoute path='/recipe-details/:id' element={<RecipeDetails/>} />
        <PrivateRoute path='/add-recipe' element={<AddRecipe/>} />
        <PrivateRoute path='/wish' element={<Wish/>} />
        <PrivateRoute path='/cart' element={<Cart/>} />
        <PrivateRoute path='/order' element={<Order/>} />
        <PrivateRoute path='/status/:id?/:mealId?' element={<OrderCard/>} />
        <Route path='*' element={() => <h3>Page Not found</h3>} />
        {/* <Redirect to="/404" /> */}
    </Routes>
    </BrowserRouter>
    </MealProviderWrapper>
)
export default Routers;
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Auth.getAuth() ? (
                <Component {...props} />
            ) : (
                <Navigate
                    to={{
                        pathname: "/"
                    }}
                />
            )
        }
    />
);

