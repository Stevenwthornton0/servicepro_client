import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import UserRegistration from './UserRegistration';

Enzyme.configure({ adapter: new Adapter() })

describe('UserRegistration component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<UserRegistration />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})