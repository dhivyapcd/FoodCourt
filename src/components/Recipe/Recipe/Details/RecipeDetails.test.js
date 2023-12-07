import React from 'react';
import { mount, shallow } from 'enzyme';
import RecipeDetails from '../Details/RecipeDetails';
import rootReducer from '../../../../redux/reducers/index'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from "redux"

describe('Recipe Details component', () => {
    describe('RecipeCard Component with parameters', () => {
        const mealDetails = {
            "mealId": 1,
            "category": "Veg",
            "mealName": "Dosa",
            "mealDescription": "Dosa with Coconut Chutney",
            "mealImage": "/images/1.jfif",
            "quantity": 7,
            "price": 25,
            "id": 1,
            "details":                               
                {
                    
                    "mealId": 1,
                    "ratings": 4,
                    "picked": "Full Meals",
                    "id": 1
                    
                }
        }

        let wrapper
        let mockStore;
        const mockHistory = { push: jest.fn(), location: {}, listen: jest.fn() }
        mockStore = createStore(rootReducer, { cart: { cartList: [], loading: false }, auth: { user: '' } })

        beforeEach(() => {
            wrapper = mount(<Provider store={mockStore}>
                <Router history={mockHistory}>
                    <RecipeDetails mealDetails={mealDetails} />
                </Router></Provider>)

        })

        it('should have called On search', () => {
            wrapper.find('Card').forEach(mealInstance => {
                const mealProps = mealInstance.props();
                const matchingMeal = mealDetails.find(meal => meal.id === mealProps.id);
                expect(mealProps.mealName).toBe(matchingMeal.mealName);
            })
            // let ratedStar = wrapper.find("#rating span.rated-star")
            // let defaultStar = wrapper.find('#rating span.default-star')            
            // console.log(defaultStar.length)
            // expect(ratedStar.length).toEqual(mealDetails.details.ratings)
            // expect(defaultStar.length).toEqual(5 - ratedStar)
        })

    })
})