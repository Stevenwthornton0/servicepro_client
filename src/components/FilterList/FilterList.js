import React, { Component } from 'react';
import { States } from '../../Utils/Utils';
import './FilterList.css';

class FilterList extends Component {

    static defaultProps = {
        handleFilter: () => {},
        handleClear: () => {}
    }
    
    render() {
        return (
            <div className='filter'>
                <p className='bold'>Filter by:</p>
                <form className='filterForm' onSubmit={this.props.handleFilter}>
                    <div>
                        <label>City</label>
                        <input
                            required
                            name='city'
                            id='filterList_city'
                        />
                    </div>
                    <div>
                        <label>State</label>
                        <States />
                    </div>
                    <div id='butContainer'>
                        <button type='submit'>Filter</button>
                        <button onClick={this.props.handleClear}>Clear</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FilterList;