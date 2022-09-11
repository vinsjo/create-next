import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const RenderIf = ({
	children,
	condition,
	fallback = null,
}: {
	children: React.ReactNode;
	condition: (() => boolean) | any;
	fallback?: React.ReactNode;
}) => {
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
