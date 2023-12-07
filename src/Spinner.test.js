import { render,screen } from "@testing-library/react"
import Spinner from './Spinner'
jest.mock('react-dom',()=>{
    return{
        ...jest.requireActual('react-dom'),
        createPortal:(element)=>{
            return element;
        }
    }
    })
describe(("Spinner Component"), () => {
    describe(("When Spinner Component is loading"), () => {
       test('render without crashing',()=>{
        render(<Spinner/> )         
        expect(screen.getByTestId("spinner")).toBeInTheDocument();
       })        
    })
})