import React, { Component } from 'react';
import Subject from '../Subject/Subject';
class ListSubject extends Component {
    render() {
        return (
            <nav>
                <div id="listsubject">
                    <Subject></Subject>
                </div>
            </nav>
        );
    }
}

export default ListSubject;
