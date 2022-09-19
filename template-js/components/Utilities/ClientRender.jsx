import React from 'react';
import useDidMount from '../../hooks/useDidMount';
import RenderIf from './RenderIf';

/**
 * Only render children on client
 * @param {{children: React.ReactNode, fallback?: React.ReactNode}} props
 */
const ClientRender = ({ children, fallback }) => {
	const didMount = useDidMount();
	return (
		<RenderIf condition={didMount} fallback={fallback}>
			{children}
		</RenderIf>
	);
};

ClientRender.propTypes = {
	children: PropTypes.node,
	fallback: PropTypes.node,
};

export default ClientRender;
