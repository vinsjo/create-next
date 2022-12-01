import React from 'react';
import PropTypes from 'prop-types';
import useDidMount from '../../hooks/useDidMount';

/**
 * Only render children on client
 * @param {{children: React.ReactNode, fallback?: React.ReactNode}} props
 */
const ClientRender = ({ children, fallback = null }) => {
    const didMount = useDidMount();
    return <>{!didMount ? fallback : children}</>;
};

ClientRender.propTypes = {
    children: PropTypes.node,
    fallback: PropTypes.node,
};

export default ClientRender;
