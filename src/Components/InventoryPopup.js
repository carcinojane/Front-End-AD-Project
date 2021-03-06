import React, { Component } from 'react';
import './InventoryPopup.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Axios from 'axios';
import { domain, api } from '../Configurations/Config';
import 'bootstrap/dist/css/bootstrap.min.css';

class InventoryPopup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: props.data,
            categoryData: props.categoryData,
            openCat: false,
            cat: ""
        }
    }

    //handle changing field value in fields
    handleUpdatedData = (event) => {
        let update = event.target.value;
        if (event.target.id === "itemName") {
            this.setState(prevState => {
                const data = prevState.data;
                return {
                    data: {
                        ...data,
                        desc: update,
                    }
                }
            })
        }
        if (event.target.id === "qty") {
            this.setState(prevState => {
                const data = prevState.data;
                return {
                    data: {
                        ...data,
                        inventoryQty: Number(update),
                    }
                }
            })
        }
        if (event.target.id === "itemUnit") {
            this.setState(prevState => {
                const data = prevState.data;
                return {
                    data: {
                        ...data,
                        unit: update,
                    }
                }
            })
        }
    }
    //event handling for dropdown
    showCat = (event) => {
        const selected = event.target.value
        this.setState(prevState => {
            const data = prevState.data
            return {
                data: {
                    ...data,
                    category: selected
                }
            }
        });
    }
    closeCat = () => {
        this.setState({
            openCat: !this.state.openCat
        })
    }

    catOpen = () => {
        this.setState({
            openCat: !this.state.openCat
        })
    }

    //Event Handling for submitting form
    submitForm = () => {
        Axios.post(api + 'api/store/stationery/post/', this.state.data)
    }

    render() {
        return (
            <div className="popup">
                <div className="popupInner">
                    <HighlightOffIcon className="formCloseBtn" onClick={this.props.closePopup} />
                    <div className="form" onChange={this.handleUpdatedData}>
                        <div className="formSection">
                            <div class="form-group row">
                              <div class="col-sm-6">
                                  Item Name:
                                <input type="text" id="itemName" value={this.state.data.desc} className="form-control"/>
                            
                              </div>
                              <div class="col-sm-6">
                                  Item Category:
                                {/*<input type="text" id="itemName" value={this.state.data.category} />*/}
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    value={this.state.data.category}
                                    open={this.state.openCat}
                                    onClose={this.closeCat}
                                    onOpen={this.catOpen}
                                    onChange={this.showCat}
                                    className="form-control">
                                    {this.props.categoryData.map(item => <MenuItem value={item}>{item}</MenuItem>)}
                                </Select>
                              </div>
                          </div>


                        </div>
                        <div className="formSection">

                            <div class="form-group row">
                              <div class="col-sm-6">
                                     Item Unit:
                                <input type="text" id="itemUnit" value={this.state.data.unit} className="form-control"/>
                            
                              </div>
                              <div class="col-sm-6">
                                   Quantity:
                                <input type="number" min="1" max="9999" id="qty" value={this.state.data.inventoryQty} className="form-control" disabled/>
                            
                              </div>
                          </div>
                        
                        </div>
                        <div className="formButtons">
                            <button onClick={async () => { await this.submitForm(); await this.props.closeForm(); }}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InventoryPopup;