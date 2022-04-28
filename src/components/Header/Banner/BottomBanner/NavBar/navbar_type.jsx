import React from "react";
import BrandNav from "./BrandNav/brand_nav";
import InformationNav from "./InforemationNav/information_nav";
import SearchNav from "./SearchNav/search_nav";

function NavbarType({ type }) {
  switch (type) {
    case "SEARCH": {
      return <SearchNav />;
    }
    case "NAVINFO": {
      return <InformationNav />;
    }
    case "BRAND": {
      return <BrandNav />;
    }
  }
}

export default NavbarType;
