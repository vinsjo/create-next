import React, { useState, useEffect } from 'react';

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

export default Clock;
