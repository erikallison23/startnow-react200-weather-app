import React from 'react';

import {
    searchBtn,
    updateSearch
} from './searchActions'


class Search extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearchBtn = this.handleSearchBtn.bind(this);
        this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
    }


    handleSearchBtn(event) {
        let { dispatch, city } = this.props;
        //let { value } = event.target;
        console.log(event.target);
        if (event.target.name=='options'){
            city = event.target.value;
        }
        dispatch(searchBtn(city));
    }

    handleUpdateSearch(e){
        var city = e.target.value;
        const {dispatch} = this.props;
        dispatch(updateSearch(city));
    }

    render() {
        const {search} = this.props

        return (
        
            <div>
                <div className='mb-3'>
                    <button onClick={this.handleSearchBtn} type='button' name='options' className='btn btn-primary' value='San Diego' >San Diego</button>
                    <button onClick={this.handleSearchBtn} type='button' name='options' className='btn btn-primary' value='New York' >New York</button>
                    <button onClick={this.handleSearchBtn} type='button' name='options' className='btn btn-primary' value='District Of Columbia' >Washington D.C.</button>
                    <button onClick={this.handleSearchBtn} type='button' name='options' className='btn btn-primary' value='London' >London</button>
                    <button onClick={this.handleSearchBtn} type='button' name='options' className='btn btn-primary' value='Tokyo' >Tokyo</button>
                    <div className='citySelector'></div>

                    <form>
                        <div className='form-row'>
                            <div className='col'>
                                <div className='input-group'>
                                    <input onChange={this.handleUpdateSearch} type=' text' className='form-control' placeholder=' Enter city' aria-label='search for' name='Search' id='Search' />
                                    <span className='input-group=btn'>
                                        <button onClick={this.handleSearchBtn} type='button' className='btn btn-success' >Go!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        );
    }
}

export default Search;