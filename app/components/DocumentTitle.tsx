/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, Fragment } from 'react';

export const DocumentTitle = ({title, children}: { title: string, children?: JSX.Element | JSX.Element[] }) => {
    useEffect(() => { document.title = title; }, [title]);
    return <Fragment>{children}</Fragment>
};