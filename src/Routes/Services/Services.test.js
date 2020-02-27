import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import Services from './Services';

Enzyme.configure({ adapter: new Adapter() })

describe('Services component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Services />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})