import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "pages/HomePage";
import Live from "pages/Live";
import EventView from "pages/Live/EventView";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="live" element={<Live />}>
          <Route index element={<EventView />} />
          <Route path="event-view" element={<EventView />} />
          <Route path="*" element={<Navigate to="event-view" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
