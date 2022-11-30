import "./App.css";
import Header from "./components/Header";
// import Table from './components/Table'
import { Provider } from "react-redux";
import store from "./store/Store";


function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        
      </Provider>
    </>
  );
}

export default App;
