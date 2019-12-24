import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListClass extends Component {

    constructor() {
        super();
        this.state = {
            courseInfor: [
                { className: 'K62 CB', schoolYear: '2019 - 2020' },
                { className: 'K62 CC', schoolYear: '2019 - 2020' }
            ]
        }
    }

    renderClass() {
        return (
            <div id="frame">
                {this.state.courseInfor.map(course => {
                    return (
                         <Link to="/Teacher/StudentScreen">
                            <div id="frameSubject">
                                <p>
                                    {course.className}
                                </p>
                                <pre style={{ float: "right", marginRight: "20px" }}>
                                    Kỳ học: {course.schoolYear}
                                </pre>
                            </div>
                         </Link>
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <div id="listsubject"
                style={{ marginLeft: "230px", position: "fixed", top: "115px" }}
                >
                {this.renderClass()}
            </div>
        );
    }
}

export default ListClass    