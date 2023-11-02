// import Navbar from './Header'
// import { Provider } from 'react-redux';
// import { Router } from 'react-router';
// import useStore from '../custom-hooks/useStore'
// import { createStore } from "redux"
// import rootReducer from '../../redux/reducers/index'
// import mount from 'enzyme/build/mount';
// jest.mock('../custom-hooks/useStore')
// describe(("Header Component"), () => {
//     describe(("When Header Component with values"), () => {
//         let wrapper;
//         let mockStore;

//         beforeEach(() => {
//             //mock history
//             const mockHistory = { push: jest.fn(), location: {}, listen: jest.fn(), createHref: jest.fn() }
//             // mock store
//             mockStore = createStore(rootReducer, { cart: { cartList: [], loading: false }, auth: { user: '' } })
//             //mock useStore
//             const item1 = { id: '1', mealName: 'Dosa' }
//             const item2 = { id: '2', mealName: 'Idli' }
//             useStore.mockReturnValue({
//                 state: { wishList: [ item1, item2 ] },
//                 dispatch: jest.fn()
//             })
//             wrapper = mount(<Provider store={mockStore}>
//                 <Router history={mockHistory}>
//                     <Navbar />
//                 </Router>
//             </Provider>)
//         })
//         it(('render component without crashing'), () => {
//             console.log(wrapper.debug())
//             expect(wrapper.exists()).toBeTruthy()
//         })
//         it(('render component NavLinks'), () => {
//             console.log(useStore())
//             expect(wrapper.find("NavLink").length).toBe(5)
//             expect(wrapper.find("NavLink").at(0).text()).toEqual('Menu')
//             expect(wrapper.find("NavLink").at(1).text()).toEqual('Add Recipe')
//             expect(wrapper.find("NavLink").at(2).text()).toEqual(`Wishlist(${useStore().state.wishList.length})`)
//             expect(wrapper.find("NavLink").at(3).text()).toEqual(`Cart(${mockStore.getState().cart.cartList.length})`)
//             expect(wrapper.find("NavLink").at(4).text()).toEqual('My Orders')

//         })
//     })
//     describe(("When Header Component without values"), () => {
//         let wrapper;
//         let mockStore;

//         beforeEach(() => {
//             //mock history
//             const mockHistory = { push: jest.fn(), location: {}, listen: jest.fn(), createHref: jest.fn() }
//             // mock store
//             mockStore = createStore(rootReducer, { cart: {}, auth: {}})

//             //mock useStore

//             useStore.mockReturnValue({
//                 state: { },
//                 dispatch: jest.fn()
//             })
//             wrapper = mount(<Provider store={mockStore}>
//                 <Router history={mockHistory}>
//                     <Navbar />
//                 </Router>
//             </Provider>)
//         })
//         it(('render component without crashing'), () => {
//             expect(wrapper.exists()).toBeTruthy()
//         })
//         it(('render component NavLinks'), () => {            
//             expect(wrapper.find("NavLink").length).toBe(5)
//             expect(wrapper.find("NavLink").at(0).text()).toEqual('Menu')
//             expect(wrapper.find("NavLink").at(1).text()).toEqual('Add Recipe')
//             expect(wrapper.find("NavLink").at(2).text()).toEqual(`Wishlist(0)`)
//             expect(wrapper.find("NavLink").at(3).text()).toEqual(`Cart(0)`)
//             expect(wrapper.find("NavLink").at(4).text()).toEqual('My Orders')
//         })
//     })
// })