import React from 'react';
import { createPortal } from 'react-dom';

// interface PortalProps {
//   children?: React.ReactElement;
//   mountPoint?: Element | null;
// }
const Portal = ({ children, mountPoint } ) => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const IS_SSR = typeof window === 'undefined';

  if (IS_SSR) {
    return children;
  }

  return createPortal(
    <>{children}</>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    mountPoint ?? window.document.body,
  );
};

export default Portal;