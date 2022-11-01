import React from 'react';
import useDidMount from '@hooks/useDidMount';
import RenderIf from './RenderIf';

/** Only render children on client */
const ClientRender = (props: {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}) => {
    const didMount = useDidMount();
    return (
        <RenderIf condition={didMount} fallback={props.fallback}>
            {props.children}
        </RenderIf>
    );
};

export default ClientRender;
