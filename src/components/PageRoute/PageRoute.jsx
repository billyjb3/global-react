import React, { useEffect } from 'react';
import { useRouter } from '../../context';

export const PageRoute = (props) => {
  const {
    children,
    parentPath = '', // TODO: nested paths aren't completely implemented yet
    path = '',
    Component,
  } = props;
  const { pathname, addPath } = useRouter();
  const composedPath = parentPath ? `${parentPath}/${path}` : path;
  const isOnRoute = !composedPath ? true : pathname.includes(composedPath);

  useEffect(() => {
    addPath(composedPath);
  }, [composedPath]);

  if (Component && isOnRoute) {
    if (children) {
      return (
        <Component>
          {children.map((child) => React.cloneElement(child, { parentPath: composedPath }))}
        </Component>
      );
    } else {
      return <Component />;
    }
  }

  if (children) return (
    React.cloneElement(children, { parentPath: composedPath })
  );

  return null;
};
