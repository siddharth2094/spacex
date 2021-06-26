import React from "react";
import Filters from ".";

const SuccesFulLaunch = ({
  heading,
  filters,
  setFilterValue,
  selectedFilter,
}) => {
  return (
    <Filters
      heading={heading}
      filters={filters}
      setFilterValue={(val) => setFilterValue(val)}
      selectedFilter={selectedFilter}
    />
  );
};

export default SuccesFulLaunch;
