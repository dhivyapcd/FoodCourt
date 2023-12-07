import mount from 'enzyme/build/mount';
import { Provider } from 'react-redux';
import { createStore } from "redux"
import { CLEAR_WISH,REMOVE_FROM_WISH, ADD_QUANTITY, ADD_TO_CART } from '../../redux/actions/actionTypes';
import rootReducer from '../../redux/reducers/index'
import Wish from './wish'
import useStore from '../custom-hooks/useStore'
import { Router } from 'react-router';
jest.mock('../custom-hooks/useStore')
describe(("Wish Component"), () => {
    describe(("When Wish Component with values"), () => {
        let wrapper;
        let mockStore;

        beforeEach(() => {
           // const mockHistory = { push: jest.fn(), location: {}, listen: jest.fn(), createHref: jest.fn() }

            // mock store
            mockStore = createStore(rootReducer, { wish: { wishList: [], loading: false }, auth: { user: '' } })
          
            mockStore.dispatch = jest.fn()

            useStore.mockReturnValue({
                state: {},
                dispatch: jest.fn()
            })
            wrapper = mount(<Provider store={mockStore}>
               {/* <Router history={mockHistory}> */}
                    <Wish />
              {/* //  </Router> */}
            </Provider>)
        })
        it(('render component without crashing'), () => {
            expect(wrapper.exists()).toBeTruthy()
        })
        it(('render component No items in the Wishlist'), () => {
            expect(wrapper.find('h1').text()).toEqual("No items in the Wishlist")
        })
    })
    describe(("When Wish Component with updated State"), () => {
        let wrapper;
        let mockStore;

        beforeEach(() => {
            const mockHistory = { push: jest.fn(), location: {}, listen: jest.fn(), createHref: jest.fn() }

            // mock store
            const item1 = { id: 1, mealName: 'Dosa' }
           

            mockStore = createStore(rootReducer, { cart: { cartList: [item1], loading: false }, auth: { user: '' } })
            mockStore.dispatch = jest.fn()
            useStore.mockReturnValue({
                state: { wishList: [item1] },
                dispatch: jest.fn()
            })
            wrapper = mount(<Provider store={mockStore}>
                <Router history={mockHistory}>
                    <Wish />
                </Router>
            </Provider>)


        });

        it(('sholud render 2 buttons'), () => {
            console.log(wrapper.debug())
            expect(wrapper.find('button').length).toBe(4)
        });

        describe(("When click event is triggered on 'clear wish' button"), () => {
            beforeEach(() => {
                wrapper.find('button').at(0).simulate('click')
            })
            it(('clear wish'), () => {                
                expect(useStore().dispatch).toHaveBeenCalled();
                expect(useStore().dispatch).toHaveBeenCalledTimes(1);               
                expect(useStore().dispatch).toHaveBeenCalledWith({ type: CLEAR_WISH });
            })
        })
        describe(("When click event is triggered on 'remove from wishlist' button"), () => {
            beforeEach(() => {
                wrapper.find('button').at(3).simulate('click')
            })
            it(('Remove from Wishlist'), () => {                
                expect(useStore().dispatch).toHaveBeenCalled();
                expect(useStore().dispatch).toHaveBeenCalledTimes(1);                
                expect(useStore().dispatch).toHaveBeenCalledWith({
                    type: REMOVE_FROM_WISH,
                    id: 1
                });
            })
        })
        describe(("When click event is triggered on 'add quantity to Cart' button"), () => {
            beforeEach(() => {
                wrapper.find('button').at(2).simulate('click')
            })
            it(('add cart'), () => {                        
                expect(mockStore.dispatch).toHaveBeenCalled();
                expect(mockStore.dispatch).toHaveBeenCalledTimes(1);                
                expect(mockStore.dispatch).toHaveBeenCalledWith({
                    type: ADD_QUANTITY ,id:1                   
                });
            })
        })
    })
    describe(("When Wish Component with remove from wishlist and add to cart fully State"), () => {
        let wrapper;
        let mockStore;
        const item1 = { id: 1, mealName: 'Dosa' }

        beforeEach(() => {
            const mockHistory = { push: jest.fn(), location: {}, listen: jest.fn(), createHref: jest.fn() }

            // mock store
                      

            mockStore = createStore(rootReducer, { cart: { cartList: [], loading: false }, auth: { user: '' } })
            mockStore.dispatch = jest.fn()
            useStore.mockReturnValue({
                state: { wishList: [item1] },
                dispatch: jest.fn()
            })
            wrapper = mount(<Provider store={mockStore}>
                <Router history={mockHistory}>
                    <Wish />
                </Router>
            </Provider>)


        });

       
        describe(("When click event is triggered on 'remove from wishlist' button"), () => {
            beforeEach(() => {
                wrapper.find('button').at(3).simulate('click')
            })
            it(('Remove from Wishlist'), () => {                
                expect(useStore().dispatch).toHaveBeenCalled();
                expect(useStore().dispatch).toHaveBeenCalledTimes(1);                
                expect(useStore().dispatch).toHaveBeenCalledWith({
                    type: REMOVE_FROM_WISH,
                    id: 1
                });
            })
        })
        describe(("When click event is triggered on 'add to Cart' button"), () => {
            beforeEach(() => {
                wrapper.find('button').at(2).simulate('click')
            })
            it(('add cart'), () => {                        
                expect(mockStore.dispatch).toHaveBeenCalled();
                expect(mockStore.dispatch).toHaveBeenCalledTimes(1);                
                expect(mockStore.dispatch).toHaveBeenCalledWith({
                    type: ADD_TO_CART ,payload:item1                   
                });
            })
        })
    })
})