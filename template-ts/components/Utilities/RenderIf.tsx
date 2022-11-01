import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const RenderIf = (props: {
    children: React.ReactNode;
    condition: (() => boolean) | any;
    fallback?: React.ReactNode;
}) => {
    const renderChildren = useMemo(
        () =>
            typeof props.condition === 'function'
                ? props.condition()
                : !!props.condition,
        [props]
    );
    return <>{renderChildren ? props.children : props.fallback || null}</>;
};

RenderIf.propTypes = {
    children: PropTypes.node,
    condition: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
    fallback: PropTypes.node,
};

export default RenderIf;
