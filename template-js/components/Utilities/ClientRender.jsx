import React from 'react';
import useDidMount from '../../hooks/useDidMount';
import RenderIf from './RenderIf';

/**
 * Only render children on client
 * @param {{children: React.ReactNode}} props
 */
const ClientRender = (props) => {
	const didMount = useDidMount();
	return <RenderIf condition={didMount}>{props.children}</RenderIf>;
};

export default ClientRender;
