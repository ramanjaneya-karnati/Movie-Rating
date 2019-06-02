import React from 'react';
import {Table, Image} from 'semantic-ui-react'
import StarRatingComponent from 'react-star-rating-component';

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
                        <Table.HeaderCell singleLine>Movie Cover</Table.HeaderCell>
                        <Table.HeaderCell>Movie Name</Table.HeaderCell>
                        <Table.HeaderCell>Released Date</Table.HeaderCell>
                        <Table.HeaderCell>Rating</Table.HeaderCell>
                        <Table.HeaderCell>Story</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {moviesListUI}
                </Table.Body>
            </Table>
        )
    }

}
