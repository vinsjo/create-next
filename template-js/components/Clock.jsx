import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Clock = ({ precision = 100 }) => {
    const [output, setOutput] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(
            () => setOutput(new Date().toLocaleTimeString()),
            precision
        );
        return () => clearInterval(interval);
    }, [precision, setOutput]);
    return <>{output}</>;
};

Clock.propTypes = { precision: PropTypes.number };

export default Clock;
