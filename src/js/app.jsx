import React from 'react';
import City from './Components/City';
import History from './Components/History';
import Search from './Components/Search';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-center'>Origin Weather Application</h1>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <Search />
          </div>
        </div>

        <div className='row '>

          <div className='col-md-6'>
            <City />
          </div>

          <div className='col-md-6'>
            <History />
          </div>
        </div>
      </div>
    );
  }
}
