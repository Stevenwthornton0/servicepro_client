import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import ServicePage from './ServicePage';


Enzyme.configure({ adapter: new Adapter() })

describe('ServicePage component', () => {
    it('renders without crashing', () => {
        const wrapper = mount(<ServicePage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})

