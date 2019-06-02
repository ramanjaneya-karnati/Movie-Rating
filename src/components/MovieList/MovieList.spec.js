import {mount, shallow} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import movies from '../../data/movies'
import MovieList from './index';

const spy = jest.fn();

describe('MovieList Component Testing', () => {
    let MovieListWrapper,
        MovieListData,
        wrapper;
    beforeEach(() => {
        MovieListData = {
            movies,
            onMovieRatingChangeHandler: spy
        };
    });

    it('render the snapshot', () => {
        const tree = renderer.create(<MovieList {...MovieListData}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('render the component without crashing', () => {
        wrapper = shallow(<MovieList {...MovieListData}/>);
        expect(wrapper.exists()).toBe(true);
    });

    it('verifying the passed data to component ', () => {
        MovieListWrapper = mount(<MovieList {...MovieListData}/>);
        expect(MovieListWrapper.find('StarRatingComponent').at(0).props().name).toBe('rating-0');
    });

    it('verifying  the onStarClick function to be defined ', () => {
        MovieListWrapper = mount(<MovieList {...MovieListData}/>);
        const ButtonClick = MovieListWrapper.find('StarRatingComponent').at(0).props();
        expect(ButtonClick.onStarClick).toBeDefined();
    });

    it('simulating the starrating component ', ()=>{
        MovieListWrapper = mount(<MovieList {...MovieListData}/>);
        const ButtonClick = MovieListWrapper.find('StarRatingComponent').at(0).simulate('click');
        ButtonClick.props().onStarClick();
        expect(spy).toBeCalled();
    })

});