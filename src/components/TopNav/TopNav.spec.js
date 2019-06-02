import {mount, shallow} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import TopNav from './index';

describe('TopNav Component Testing', ()=>{
    it('renderer snapshot', () => {
        const tree = renderer.create(<TopNav/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renderer without crashing', () => {
        const wrapper = shallow(<TopNav/>);
        expect(wrapper.exists()).toBe(true);
    });

});