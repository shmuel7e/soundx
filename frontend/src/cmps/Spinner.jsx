import React from 'react';

const Spinner = () => {

    return <div className="spinner-container flex justify-center align-center">
        <img src={require('../assets/animation/spinner.png')} alt="Loading..." />
    </div>
}
export default Spinner
