import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = props => (
    <Spinner color="primary" 
            style={
                props
                ?
                { width: props.size, height: props.size }
                :
                { width: '3em', height: '3em' }
            }>
        LOADING &nbsp;
    </Spinner>
)

export default Loading;