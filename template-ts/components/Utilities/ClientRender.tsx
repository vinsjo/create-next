import React from 'react';
import useDidMount from '@hooks/useDidMount';

type Props = {
    children: React.ReactNode;
    fallback?: React.ReactNode;
};

/** Only render children on client */
const ClientRender = ({ children, fallback = null }: Props) => {
    const didMount = useDidMount();
    return <>{!didMount ? fallback : children}</>;
};

export default ClientRender;
