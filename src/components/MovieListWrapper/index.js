import React from 'react';
import MoviesList from '../MovieList/index'
import TopNav from '../TopNav/index'
import {Button, Icon, Label} from 'semantic-ui-react'
import {APP_LABELS} from '../../constants/AppLabels'

export default class App extends React.Component {


    render() {

        const {
            movies,
            onMovieRatingChangeHandler,
            stopRateRandomMovie,
            startRateRandomMovie,
            isRandRatingPlaying,
            randRatingText
        } = this.props;

        return (
            <div>
                <TopNav/>
                <div className='container' style={{marginTop: '100px'}}>

                    <Button icon  onClick={function () {
                        isRandRatingPlaying ? stopRateRandomMovie() : startRateRandomMovie();
                    }}>
                        {
                            isRandRatingPlaying ? (
                                    <div>
                                        <Icon name='pause'/>
                                        {APP_LABELS.STOP_RANDOM_RATING}
                                    </div>
                                ) :
                                (<div>
                                    <Icon name='play'/>
                                    {APP_LABELS.START_RANDOM_RATING}
                                </div>)
                        }

                    </Button>

                    {
                        randRatingText &&
                        <Label>
                            <Label.Detail>{randRatingText}</Label.Detail>
                        </Label>
                    }

                    <MoviesList movies={movies} onMovieRatingChangeHandler={onMovieRatingChangeHandler}/>
                </div>
            </div>
        )
    }
}
