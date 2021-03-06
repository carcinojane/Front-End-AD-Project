import React, { Component } from 'react';
import './StockAdjustmentPopup.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

class InventoryPopup extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const tableData = this.props.detailApprovalData.map(item =>
            <tr className="tableRow" key={item.stockAdustmentDetailId}>
                <td>{item.stockAdustmentDetailId}</td>
                <td>{item.quantity}</td>
                <td>{(item.amount).toFixed(2)}</td>
                <td>{item.reason}</td>
            </tr>
        )
        return (
            <div className="detailContainer">
                <div className="detailInnerContainer">
                        <HighlightOffIcon onClick={this.props.closePopup} />
                        <div className="col-sm-12 text-center">
                            <h4>StockAdjustment Detail Records</h4>
                        </div>
                        <div className="col-sm-12">
                            <div className="col-sm-6">
                            <p>StockAdjustment No:{this.props.detailInfo.stockAdustmentId}</p>
                            </div>
                        </div>
                        <div  className="col-sm-12 text-center">
                            <table className="table">
                                <tr className="tableRow">
                                    <th>Item Code</th>
                                    <th>Quantity Adjusted</th>
                                    <th>Amount</th>
                                    <th>Reason</th>
                                </tr>
                            <tbody className="popupTable">  
                                {tableData}
                            </tbody>
                            </table>
                        </div>
                </div>
            </div>
        )
    }
}

export default InventoryPopup;