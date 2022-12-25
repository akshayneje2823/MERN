import Navbar from './components/navbar/Navbar';
import Leftbar from './components/left bar/Leftbar';
import Update from './components/update/Update';
import Rightbar from './components/right bar/RightBar';
import "./App.css";



const App = () => {
 
  return (
    <>
      <Navbar />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </>
  );
};

export default App;