import React, { Component } from 'react';
import Subject from '../Subject/Subject';
class ListSubject extends Component {
    render() {
        return (
            <div id = "listsubject" style = {{marginLeft : "230px", position : "fixed", top : "115px"}}>
                <Subject></Subject>
            </div>
        );
    }   
}

export default ListSubject;
