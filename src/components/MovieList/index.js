import React from 'react';
import {Table, Image} from 'semantic-ui-react'
import StarRatingComponent from 'react-star-rating-component';
import {APP_LABELS} from '../../constants/AppLabels';

export default class MoviesList extends React.Component {

    render() {

        const {
            movies,
            onMovieRatingChangeHandler
        } = this.props;

        const moviesListUI = movies.map((movie, index) => {
            return (
                <Table.Row key={index}>
                    <Table.Cell>
                        <Image src={movie.posterurl} size='small' rounded/>
                    </Table.Cell>
                    <Table.Cell singleLine>{movie.title}</Table.Cell>
                    <Table.Cell singleLine>{movie.releaseDate}</Table.Cell>
                    <Table.Cell style={{width: '300px'}}>

                        <StarRatingComponent
                            name={`rating-${index}`}
                            editing={true}
                            renderStarIcon={() => <i className="fa fa-star fa-2x" aria-hidden="true"></i>}
                            starCount={10}
                            value={movie.rating}
                            onStarClick={(current) => {
                                onMovieRatingChangeHandler(index, current);
                            }}
                        />

                    </Table.Cell>
                    <Table.Cell>
                        {movie.storyline}
                    </Table.Cell>
                </Table.Row>
            )
        });

        return (

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine>{APP_LABELS.MOVIE_COVER}</Table.HeaderCell>
                        <Table.HeaderCell>{APP_LABELS.MOVIE_NAME}</Table.HeaderCell>
                        <Table.HeaderCell>{APP_LABELS.RELEASED_DATE}</Table.HeaderCell>
                        <Table.HeaderCell>{APP_LABELS.RATING}</Table.HeaderCell>
                        <Table.HeaderCell>{APP_LABELS.STORY}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {moviesListUI}
                </Table.Body>
            </Table>
        )
    }

}
