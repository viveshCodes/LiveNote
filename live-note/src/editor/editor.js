import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditorComponent extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <h1>This is Editor Component.</h1>
        )
    }
}

export default withStyles(styles)(EditorComponent);