import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Home from "./Component/Home/Home";
import Completed from "./Component/Completed/Completed";
import Pending from "./Component/Pending/Pending";
import Header from "./Component/Header/Header";
import Modal from "./UI/Modal/Modal";
import Employee from "./Component/Employee/Employee";
import IconButton from "@material-ui/core/IconButton";
import { dataActions } from "./Store";
import Home2 from "./Component/Home/Home2";
import Tooltip from "@material-ui/core/Tooltip";

import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const modalActive = useSelector((state) => state.modalActive);
  const dispath = useDispatch();

  const modalHandler = () => {
    dispath(dataActions.setModalActive());
    dispath(
      dataActions.setModalData({
        modalType: "add",
      })
    );
  };

  return (
    <div className="App">
      {modalActive && <Modal />}
      <Header />
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/home2">
        <Home2 />
      </Route>
      <Route path="/completed">
        <Completed />
      </Route>
      <Route path="/pending">
        <Pending />
      </Route>
      <Route path="/employee">
        <Employee />
      </Route>
      <div className="addBtn" onClick={modalHandler}>
        <Tooltip title="Add Task">
          <IconButton>
            <LibraryAddIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
