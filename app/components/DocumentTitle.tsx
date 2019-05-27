import * as React from 'react';

export const DocumentTitle = ({title, children}: { title: string, children?: JSX.Element | JSX.Element[] }) => {
    React.useEffect(() => { 
        document.title = title;
    }, [title]);
    return <React.Fragment>{children}</React.Fragment>
}
