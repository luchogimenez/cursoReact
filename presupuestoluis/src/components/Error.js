import React from 'react';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => (
    <p className="alert alert-danger erro">{mensaje}</p>
);

Error.protoTypes = {
    mensaje: PropTypes.string.isRequired
}
 
export default Error;