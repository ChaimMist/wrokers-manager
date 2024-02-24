import React from 'react';
import './App.css';
import {AdminRoutes} from "./routes/admin/adminRoutes";
import {WorkerRoutes} from "./routes/worker/wrokerRoutes";

function App() {
    return (
      <WorkerRoutes />
    );
}

export default App;
