import "./App.css";
import Resume from "./components/Resume";
import resume from "./Data";
import Education from "./components/Education";
function App() {
  return (
    <div className="App">
      <div>
      {
        resume.map(resume=><Resume>
          <Education />

        </Resume>
          )
      }
      </div>
        
      
    </div>
  );
}

export default App;
