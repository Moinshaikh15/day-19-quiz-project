import ReactDOM from "react-dom/client";
import './style.css'
import Quiz from './component/Quiz'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Answer from "./Answer";
// let reactRoot = ReactDOM.createRoot(document.getElementById('root'));

// reactRoot.render(<Quiz />)

let root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/answer" element={<Answer />} />
        
  
  
      </Routes>
    </BrowserRouter>
  
  );