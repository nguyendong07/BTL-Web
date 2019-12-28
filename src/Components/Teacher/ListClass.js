import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListClass.css'
class ListClass extends Component {

    constructor() {
        super();
        this.state = {
            courseInfor: [
                { className: 'Tin học cơ sở 4', schoolYear: '2019 - 2020' },
                { className: 'Phát triển ứng dụng Web', schoolYear: '2019 - 2020' }
            ]
        }
    }

    renderClass() {
        return (
            <div id="frame">
                {this.state.courseInfor.map(course => {
                    return (
                         <Link to="/Teacher/ListSubject" style={{ textDecoration: 'none' }}>
                            <div id="frameSubject">
                                <p>
                                        {course.className}
                                </p>
                                <p style={{ float: "right",marginRight: 10, fontSize:16,}}>
                                    Kỳ học: {course.schoolYear}
                                </p>
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