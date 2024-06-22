import React from "react";
import SideMenu from "./Components/SideMenu";
import PageContentprm from "./Components/PageContent";



function mainprm() {
  return (
    <div className="App">
      <div className="SideMenuAndPageContent">
        <SideMenu/>
        <PageContentprm/>
      </div>
    </div>
  );
}

export default mainprm;
