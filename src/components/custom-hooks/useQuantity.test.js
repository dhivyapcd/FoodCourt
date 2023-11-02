import useQuantity from "./useQuantity"
import { shallow } from 'enzyme';

describe(("useQuantity Component"), () => {
    const Counter = (({ children, ...rest }) => children(useQuantity(rest)))
    function customHook(props) {
        let returnVal = {};
        shallow(<Counter {...props}>
            {
                val => {
                    Object.assign(returnVal, val)
                    return null
                }

            }
        </Counter>)
        return returnVal;
    }
    describe(("When it is called default value"), () => {

        it(("should return correct quantity"), () => {
            const quantityData = customHook({ intialValue: 1 })
            expect(quantityData.quantity).toBe(1)

        })
    })
    describe(("When increment called "), () => {
        it(("should return updated quantity"), () => {
            const quantityData = customHook({ intialValue: 1 })
            expect(quantityData.quantity).toBe(1)

            expect(quantityData.increment())
            expect(quantityData.quantity).toBe(2)

            expect(quantityData.increment())
            expect(quantityData.quantity).toBe(3)
        })
    })
    describe(("When decrement called "), () => {
        it(("should return updated quantity"), () => {
            const quantityData = customHook({ intialValue: 15 })
            expect(quantityData.quantity).toBe(15)

            expect(quantityData.decrement())
            expect(quantityData.quantity).toBe(14)

            expect(quantityData.decrement())
            expect(quantityData.quantity).toBe(13)
        })
    })
})