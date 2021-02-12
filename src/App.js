import React from "react";
import { NewsContextProvider } from "./NewsContext";

import News from "./components/News.js"

function App() {
  return (
    <div className="widget">
      <div className="heading">
        <Header />
      </div>
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
      <Footer />
    </div>
  );
}

export default App;