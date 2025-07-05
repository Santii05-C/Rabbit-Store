import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState();

  return <div>FilterSideBar</div>;
};

export default FilterSideBar;
