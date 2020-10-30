import React, { Component } from 'react';

class TaskItem extends Component {
    onDelete = () => {
        this.props.onDelete(this.props.item.id);
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.item.id);
    }

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.item.id);
    }

    render(){  
        return (
            <tr className="text-center">
                <td>{ this.props.index }</td>
                <td>{ this.props.item.mssv }</td>
                <td>{ this.props.item.tensv }</td>
                <td>{ ((this.props.item.diemNMLT + this.props.item.diemCTDL + this.props.item.diemLTHDT)/ 3).toFixed(2) }</td>
                <td className="text-center">
                    <span className={ this.props.item.status === true ? "label label-danger" : "label label-success" } onClick={ this.onUpdateStatus }>
                                { this.props.item.status === true ? 'Kích Hoạt' : 'Ẩn'}
                            </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={ this.onUpdate }>
                        <span className="fa fa-pencil mr-5"></span>&ensp;Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={ this.onDelete }>
                        <span className="fa fa-trash mr-5"></span>&ensp;Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
