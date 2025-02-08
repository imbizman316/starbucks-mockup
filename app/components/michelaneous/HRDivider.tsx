import React from "react";

const HRDivider = ({ color = "#212121" }: { color?: string }) => {
  return (
    <hr className={`border-[${color}]-solid border-solid w-[100%] py-3`} />
  );
};

export default HRDivider;
