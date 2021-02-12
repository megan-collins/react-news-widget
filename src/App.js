import React from "react";
import { NewsContextProvider } from "./NewsContext";

import Header from "./components/Header"
import Footer from "./components/Footer"
import News from "./components/News.js"
import options from "./components/Dropdown.js"
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

function App() {
  return (
    <div className="widget">
      <div className="heading">
        <Header />
        <div className="filter">
          <ReactMultiSelectCheckboxes placeholderButtonLabel="Filter by source" className="dropdown" options={options} />
        </div>
      </div>
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
      <Footer />
    </div>
  );
}

export default App;