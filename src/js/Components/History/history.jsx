import React from 'react';

class History extends React.Component {
    render() {
        const {history} = this.props
        return (
            <div className='card'>
                <div className='card-header alert-primary'>Search History</div>
                <div className='container card-block'>
                    <table className='table table-striped'>
                        <tbody>
                            {history.length>0 && history.map((historyItem, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{historyItem.city}</td>
                                        <td>{historyItem.date}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default History; 