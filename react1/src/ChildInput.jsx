import React, { forwardRef } from "react";

const ChildInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} placeholder="Enter something..." />;
});

export default ChildInput;
