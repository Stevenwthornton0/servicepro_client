import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import App from './App';

Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})