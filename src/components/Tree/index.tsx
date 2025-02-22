import React, { forwardRef } from 'react';
import { Tree, type TreeProps } from 'primereact/tree';


export const WrappedTree = forwardRef<Tree, TreeProps>((props, ref) => {
  return <Tree {...props} ref={ref} />;
});

