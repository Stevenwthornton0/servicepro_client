import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import HomePage from './HomePage';

Enzyme.configure({ adapter: new Adapter() })

describe('HomePage component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<HomePage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})