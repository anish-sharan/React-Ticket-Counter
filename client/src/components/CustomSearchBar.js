import React from "react";
import PropTypes from "prop-types";
import Select from "react-dropdown-select";

const CustomSearchBar = ({
  data,
  setSelectedData,
  multi,
  placeholder,
  containerStyle,
}) => {
  return (
    <div>
      <Select
        options={data}
        onChange={setSelectedData}
        placeholder={placeholder}
        style={{ ...containerStyle, ...style.selectStyles }}
        multi={multi}
      />
    </div>
  );
};

const style = {
  selectStyles: {
    height: "55px",
    fontSize: "22px",
    borderRadius: "4px",
  },
};

CustomSearchBar.propTypes = {
  data: PropTypes.array,
  setSelectedData: PropTypes.func,
  multi: PropTypes.bool,
  placeholder: PropTypes.string,
  containerStyle: PropTypes.object,
};

export default CustomSearchBar;
