import React, { Component } from 'react';
import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';
import './Add.css';
class Add extends Component {
    constructor() {
        super()
    }
    renderForm = () => {
        return (
            <div
                style={{ marginLeft: "230px", position: "fixed", top: "150px" }}
            >
                <form onsubmit="return false">
                    <div>
                        <label name="name">Họ tên: </label>
                        <input type="text" name="name" id="ten"/>
                    </div>
                    <div>
                        <label name="msv">Mã sinh viên: </label>
                        <input type="text" name="msv" id="msv"/>
                    </div>
                    {/* <div style={{ marginRight:120, marginTop:400 }}>
                        <button className="btn" type="submit" id="chapnhan">Chấp nhận</button>
                        <button className="btn" type="reset">Hủy bỏ</button>
                    </div> */}
                </form>
            </div>
        );
    }

    render() {
        return (
            <>
                <HeaderElement></HeaderElement>
                <MenuTeacher></MenuTeacher>
                {this.renderForm()}
            </>
        );
    }
}

export default Add  