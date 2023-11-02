import React, { Component, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import "./App.css";
import MealProviderWrapper from './components/provider/MealProviderWrapper';


import { BrowserRouter } from "react-router-dom";
import Spinner from "./Spinner";
const Header = React.lazy(() =>
    import('./components/common/Header')) 

const Routers = React.lazy(() => import("./Routers"));
const LoginForm = React.lazy(() => import("./components/Login/login"));
const SignUpForm = React.lazy(() => import("./components/SignUp/signup"));
const Menu = React.lazy(() => import("./components/Recipe/Menu/Menu"));

const RecipeDetails = React.lazy(() =>
  import("./components/Recipe/Recipe/Details/RecipeDetails")
);
const AddRecipe = React.lazy(() =>
  import("./components/Recipe/Recipe/AddRecipe")
);
const Cart = React.lazy(() => import("./components/cart/cart"));
const Wish = React.lazy(() => import("./components/wish/wish"));
const Order = React.lazy(() => import("./components/order/order"));
const OrderCard = React.lazy(() => import("./components/order/OrderCard"));

export default class App extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
            <MealProviderWrapper>

        <BrowserRouter>
        <Header/>
          <Routes>
             <Route path='/' exact element={<LoginForm/>} />
            
            <Route path="/home" element={<Menu />} />
            {/* <Route path='/about' element={About} /> */}
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/sign-in" element={<LoginForm />} />
            <Route path="/recipe-details/:id" element={<RecipeDetails />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/wish" element={<Wish />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/status/:id?/:mealId?" element={<OrderCard />} />
            <Route path="*" element={() => <h3>Page Not found</h3>} />

            {/* <Route path='*' element={() => <h3>Page Not found</h3>} /> */}
          </Routes>
        </BrowserRouter>
        </MealProviderWrapper>

      </Suspense>
    );
  }
}
