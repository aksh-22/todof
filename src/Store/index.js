import { configureStore, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

const initialState = {
  taskTotal: [],
  modalActive: false,
  modalTypeAdd: true,
  modalData: [],
  taskId: 8573,
  employeePoints: [
    {
      value: "Akash",
      points: [0],
    },
    {
      value: "Mike",
      points: [0],
    },
    {
      value: "Vinay",
      points: [0],
    },
    {
      value: "Kapil",
      points: [0],
    },
  ],
};

const dataSlice = createSlice({
  name: "serviceState",
  initialState,
  reducers: {
    setModalActive: (state) => {
      state.modalActive = !state.modalActive;
    },
    setModalData: (state, action) => {
      if (action.payload.modalType === "view") {
        state.modalTypeAdd = false;
        state.modalData = [action.payload.data];
      } else {
        state.modalTypeAdd = true;
      }
    },
    setTaskTotal: (state, action) => {
      state.taskTotal.push(action.payload);
      state.taskId = state.taskId + 1;
      // localStorage.setItem("taskTotal", state.taskTotal);
      // const a = localStorage.getItem("taskTotal");
      // console.log(a);
    },
    setTaskStatus: (state, action) => {
      let sign = true;
      state.taskTotal.forEach((el, index) => {
        if (el.id === action.payload) {
          if (state.taskTotal[index].status === "Overdue") {
            sign = false;
          }
          state.taskTotal[index].status = "Completed";
          state.employeePoints.forEach((el, i2) => {
            if (el.value === state.taskTotal[index].assignedTo) {
              if (state.taskTotal[index].priority === "High") {
                console.log(sign);
                state.employeePoints[i2].points.push(sign ? 20 : -20);
              } else if (state.taskTotal[index].priority === "Normal") {
                state.employeePoints[i2].points.push(sign ? 20 : -10);
              } else if (state.taskTotal[index].priority === "Low") {
                state.employeePoints[i2].points.push(sign ? 5 : -5);
              } else if (state.taskTotal[index].priority === "More Prior") {
                state.employeePoints[i2].points.push(sign ? 50 : -50);
              }
            }
            console.log(state.employeePoints);
          });
        }
      });
    },
  },
});

export const dataActions = dataSlice.actions;

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, dataSlice.reducer);
const store = configureStore({
  reducer: persistedReducer,
});

export { store };
