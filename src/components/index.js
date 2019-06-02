import React from 'react'
import {Provider} from 'react-redux'
import Container from '../container'
import configureStore from '../store'


const MoviesContainer = (props) =>{
    return (
        <Provider store={configureStore()}>
            <Container>
                {props.children}
            </Container>
        </Provider>
    )
};

export default MoviesContainer;