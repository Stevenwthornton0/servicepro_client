import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import ServiceList from './ServiceList';

Enzyme.configure({ adapter: new Adapter() })

describe('ServiceList component', () => {
    it('renders without crashing', () => {
        const match = {
            params: {
                serviceType: "mechanic"
            }
        }
        const wrapper = mount(<ServiceList match={match}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})