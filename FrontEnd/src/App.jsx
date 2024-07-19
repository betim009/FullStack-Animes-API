import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";
import LayOut from "./components/LayOut";
import SignIn from "./pages/SignIn";
import Genre from "./pages/Genre";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/genre/:slug" element={<Genre />}/>
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
