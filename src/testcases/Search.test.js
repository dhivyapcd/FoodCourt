import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';

describe('Search component', () => {
    let wrapper
    beforeEach(() => {
        let OnSearch = jest.fn();
        wrapper = shallow(<Search OnSearch={OnSearch} />)
    });
    it('When called with params', () => {
        expect(wrapper.exists).toBeTruthy();

    })
    it('When called with params', () => {
        expect(wrapper.find("input").exists()).toBeTruthy();
    })
    describe('When onChange called', () => {
    let wrapper
    let useRefSpy
    let OnSearch = jest.fn();
    beforeEach(() => {
        useRefSpy = jest.spyOn(React, "useRef").mockReturnValueOnce({ current: { value: "A" } })
        wrapper = shallow(<Search OnSearch={OnSearch} />)
        wrapper.find("input").simulate('change')
    })
    it('should have called On search', () => {
        expect(OnSearch).toHaveBeenCalled()
    })
    it('should have called On search with current value', () => {
        expect(useRefSpy).toHaveBeenCalled()
    })
});
});