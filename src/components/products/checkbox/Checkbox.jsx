import React from "react";
import "./Checkbox.scss";

// eslint-disable-next-line react/prop-types
export const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input className="table-checkbox" type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
});

Checkbox.displayName = "Checkbox";
