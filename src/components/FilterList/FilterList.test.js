import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import FilterList from './FilterList';

Enzyme.configure({ adapter: new Adapter() })

describe('FilterList component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<FilterList />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})