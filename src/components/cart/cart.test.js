import mount from 'enzyme/build/mount';
import { Provider } from 'react-redux';
import { createStore } from "redux"
import { ADD_QUANTITY, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SUB_QUANTITY } from '../../redux/actions/actionTypes';
import rootReducer from '../../redux/reducers/index'
import Cart from './cart'
describe(("Cart Component"), () => {
    describe(("When Cart Component with values"), () => {
        let wrapper;
        let mockStore;

        beforeEach(() => {
            // mock store
            mockStore = createStore(rootReducer, { cart: { cartList: [], loading: false }, auth: { user: '' } })
            mockStore.dispatch = jest.fn()

            wrapper = mount(<Provider store={mockStore}>
                <Cart />
            </Provider>)
        })
        it(('render component without crashing'), () => {
            expect(wrapper.exists()).toBeTruthy()
        })
        it(('render component No items in the cart'), () => {
            expect(wrapper.find('h1').text()).toEqual("No items in the cart")
        })
    })
    describe(("When Cart Component with updated State"), () => {
        let wrapper;
        let mockStore;

        beforeEach(() => {
            // mock store
            const item1 = { id: 1, mealName: 'Dosa', quantity: 5 }
            //const item2 = { id: '2', mealName: 'Idli' }
            mockStore = createStore(rootReducer, { cart: { cartList: [item1], loading: false }, auth: { user: '' } })
            mockStore.dispatch = jest.fn()

            wrapper = mount(<Provider store={mockStore}>
                <Cart />
            </Provider>)
        });

        it(('sholud render 2 buttons'), () => {
            console.log(wrapper.debug())
            expect(wrapper.find('button').length).toBe(6)
        });
        it(('sholud render 2 buttons'), () => {
            expect(wrapper.find('.product').length).toBe(1)
        });

        describe(("When click event is triggered on 'clear cart' button"), () => {
            beforeEach(() => {
                wrapper.find('button').at(1).simulate('click')
            })
            it(('clear cart'), () => {
                expect(mockStore.dispatch).toHaveBeenCalled()
                expect(mockStore.dispatch).toHaveBeenCalledTimes(1)
                expect(mockStore.dispatch).toHaveBeenCalledWith({ type: CLEAR_CART })
            })
        })
        describe(("When click event is triggered on 'remove from cart' button"), () => {
            beforeEach(() => {
                wrapper.find('button').at(3).simulate('click')
            })
            it(('remove from cart'), () => {
                expect(mockStore.dispatch).toHaveBeenCalled()
                expect(mockStore.dispatch).toHaveBeenCalledTimes(1)
                expect(mockStore.dispatch).toHaveBeenCalledWith({ type: REMOVE_FROM_CART, id: 1 })
            })
        })
        describe(("When click event is triggered on 'add quantity' button"), () => {
            beforeEach(() => {
                wrapper.find('button').at(4).simulate('click')
            })
            it(('add quantity'), () => {
                expect(mockStore.dispatch).toHaveBeenCalled()
                expect(mockStore.dispatch).toHaveBeenCalledTimes(1)
                expect(mockStore.dispatch).toHaveBeenCalledWith({ type: ADD_QUANTITY, id: 1 })
            })
        })
        describe(("When click event is triggered on 'subtract quantity cart' button"), () => {
            beforeEach(() => {
                wrapper.find('button').at(5).simulate('click')
            })
            it(('subract quantity'), () => {
                expect(mockStore.dispatch).toHaveBeenCalled()
                expect(mockStore.dispatch).toHaveBeenCalledTimes(1)
                expect(mockStore.dispatch).toHaveBeenCalledWith({ type: SUB_QUANTITY, id: 1 })
            })
        })
    })
   
})