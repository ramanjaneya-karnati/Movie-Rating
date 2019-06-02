import {mount, shallow} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import MovieListWrapper from './index';
import movies from "../../data/movies";

const spy = jest.fn();

describe('TopNav Component Testing', ()=>{
    let MovieListParentWrapper,
        MovieListData,
        wrapper;
    beforeEach(() => {
        MovieListData = {
            movies,
            onMovieRatingChangeHandler: spy,
            stopRateRandomMovie:spy,
            startRateRandomMovie:spy,
            randRatingText:'Hero OldRating:4, New Rating: 8'
        };
    });

    it('renderer snapshot', () => {
        const tree = renderer.create(<MovieListWrapper {...MovieListData}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renderer without crashing', () => {
        const wrapper = shallow(<MovieListWrapper {...MovieListData}/>);
        expect(wrapper.exists()).toBe(true);
    });

    it('Simulating Randon stop button', () => {
        const wrapper = shallow(<MovieListWrapper {...MovieListData} isRandRatingPlaying={true}/>);
        wrapper.find('Button').simulate('click');
        expect(spy).toBeCalled();
    });
    it('Simulating Randon start button', () => {
        const wrapper = shallow(<MovieListWrapper {...MovieListData} isRandRatingPlaying={false}/>);
        wrapper.find('Button').simulate('click');
        expect(spy).toBeCalled();
    });

});