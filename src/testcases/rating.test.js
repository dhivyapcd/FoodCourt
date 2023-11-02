import { render,screen, } from "@testing-library/react"
import Rating from '../rating'
describe(("Rating Component"), () => {
    test(("When Rating Component with values"), () => {
        const {container,asFragment,rerender,debug}=render(<Rating rating={2}/> )
        expect(screen.getAllByTestId("star").length).toBe(5)
        expect(container.getElementsByClassName("rated-star").length).toBe(2)
        expect(container.getElementsByClassName("default-star").length).toBe(3)
        expect(asFragment()).toMatchSnapshot()

        rerender(<Rating rating={3}/> )
        console.log(debug())
        expect(container.getElementsByClassName("rated-star").length).toBe(3)
        expect(container.getElementsByClassName("default-star").length).toBe(2)
        
    })
})