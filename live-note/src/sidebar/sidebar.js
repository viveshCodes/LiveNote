import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebaritem';

class SidebarComponent extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <h1>This is Sidebar Component.</h1>
        )
    }

}
export default withStyles(styles)(SidebarComponent);