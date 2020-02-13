import React from 'react';
import Loader from 'react-loader-spinner';
import '../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Utils.css';

export default class LoaderSpinner extends React.Component {

   render() {
    return(
     <Loader
        type="Oval"
        color="#424242"
        height={90}
        width={90}

     />
    );
   }
}