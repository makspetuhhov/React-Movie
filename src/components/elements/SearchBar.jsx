import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import {StyledSearchBar,StyledSearchBarContent,} from "../styles/GlobalStyle";
//import {Trans, } from 'src/i18n/i18_config';
import RatingsFilter from "./RatingsFilter";

const SearchBar = ({ callback }) => {
  const [state, setState] = useState("");
  const timeOut = useRef(null);
  const doSearch = (event) => {const { value } = event.target;clearTimeout(timeOut.current); setState(value); timeOut.current = setTimeout(() => { callback(value);
    }, 1000);
  };

  return (
    <>
      <StyledSearchBar>
        <StyledSearchBarContent>
          <input type="text" placeholder="search..." onChange={doSearch}  value={state}/>
        </StyledSearchBarContent>
        {state === "" && <RatingsFilter /> }
      </StyledSearchBar>
    </>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
