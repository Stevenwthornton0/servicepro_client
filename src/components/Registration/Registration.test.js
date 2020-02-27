import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import Registration from './Registration';

Enzyme.configure({ adapter: new Adapter() })

describe('Registration component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Registration />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})