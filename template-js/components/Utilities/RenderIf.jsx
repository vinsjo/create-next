import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {{
 * children: React.ReactNode,
 * condition: (() => boolean) | any,
 * fallback?: React.ReactNode
 * }} props
 */
const RenderIf = ({ children, condition, fallback }) => {
	const renderChildren = useMemo(
		() => (typeof condition === 'function' ? condition() : !!condition),
		[condition]
	);
	return <>{renderChildren ? children : fallback || null}</>;
};

RenderIf.propTypes = {
	children: PropTypes.node,
	condition: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
	fallback: PropTypes.node,
};

export default RenderIf;
