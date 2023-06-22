import React, { useState, useEffect } from "react";
import axios from "axios";
import LazyLoading from "./Lazy";
import SuspenseComponent from "./Suspense";

function App() {
  return (
    <div>
      <LazyLoading />
      <SuspenseComponent />
    </div>
  );
}

export default App;
