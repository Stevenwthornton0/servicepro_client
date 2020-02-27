import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import ServiceListItem from './ServiceListItem';


Enzyme.configure({ adapter: new Adapter() })

describe('ServiceListItem component', () => {
    it('renders without crashing', () => {
        const service = {
            id: 17,
            service_type: "mechanic",
            name: "Test Mechanic",
            email: "test@mchanic.com",
            phone: "1234561234",
            about: "Test"
        }
        const wrapper = shallow(<ServiceListItem service={service}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})