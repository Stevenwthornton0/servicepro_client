import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import ServiceItem from './ServiceItem';

Enzyme.configure({ adapter: new Adapter() })

describe('ServiceItem component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<ServiceItem />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})