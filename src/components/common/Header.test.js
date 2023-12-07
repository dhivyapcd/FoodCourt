import { render, screen, } from "@testing-library/react"
import { Provider } from "react-redux";
import Navbar from './Header'
import rootReducer from '../../redux/reducers/index'
import { BrowserRouter } from 'react-router-dom';
import { createStore } from "redux"
import useStore from '../custom-hooks/useStore'
jest.mock('../custom-hooks/useStore')
describe(("Header Component"), () => {
    const mockHistory = { push: jest.fn(), location: {}, listen: jest.fn(), createHref: jest.fn() }
        
    test(("When Header Component with values"), () => {
        let mockStore;
       mockStore = createStore(rootReducer, { cart: { cartList: [], loading: false }, auth: { user: '' } })
        mockStore.dispatch = jest.fn()
        //mock useStore
        const item1 = { id: '1', mealName: 'Dosa' }
        const item2 = { id: '2', mealName: 'Idli' }
        useStore.mockReturnValue({
            state: { wishList: [item1, item2] },
            dispatch: jest.fn()
        })
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>)
        expect(screen.getAllByRole("link").length).toBe(8)
        expect(screen.getAllByRole("link")[0].textContent).toEqual('Menu')
        expect(screen.getAllByRole("link")[1].textContent).toEqual('Add Recipe')
        expect(screen.getAllByRole("link")[2].textContent).toEqual(`Wishlist(${useStore().state.wishList.length})`)
        expect(screen.getAllByRole("link")[3].textContent).toEqual(`Cart(${mockStore.getState().cart.cartList.length})`)
        expect(screen.getAllByRole("link")[4].textContent).toEqual('My Orders')
    })
    test(("When Header Component without values"), () => {
        let mockStore;
        mockStore = createStore(rootReducer, { cart: { }, auth: {} })
        mockStore.dispatch = jest.fn()
        //mock useStore
       
        useStore.mockReturnValue({
            state: {  },
            dispatch: jest.fn()
        })
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>)
        expect(screen.getAllByRole("link").length).toBe(8)
        expect(screen.getAllByRole("link")[0].textContent).toEqual('Menu')
        expect(screen.getAllByRole("link")[1].textContent).toEqual('Add Recipe')
        expect(screen.getAllByRole("link")[2].textContent).toEqual(`Wishlist(0)`)
        expect(screen.getAllByRole("link")[3].textContent).toEqual(`Cart(0)`)
        expect(screen.getAllByRole("link")[4].textContent).toEqual('My Orders')
    })
})