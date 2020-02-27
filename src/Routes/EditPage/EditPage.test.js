import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import EditPage from './EditPage';

Enzyme.configure({ adapter: new Adapter() })

describe('EditPage component', () => {
    it('renders without crashing', () => {
        const props = {
                path: "/services/service/:serviceId/edit",
                url: "/services/service/1/edit",
                isExact: true,
                params: {
                    serviceId: "1"
                }
            }
        
        const wrapper = mount(<EditPage match={props}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})