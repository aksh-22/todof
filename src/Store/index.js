import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
// import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
import {
  // persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

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
      taskName:'',
      taskStatus:''
    },
    {
      value: "Mike",
      points: [0],
      taskName:'',
      taskStatus:''
    },
    {
      value: "Vinay",
      points: [0],
      taskName:'',
      taskStatus:''
    },
    {
      value: "Kapil",
      points: [0],
      taskName:'',
      taskStatus:''
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
    },
    setTaskOverDue: (state, action) => {
      state.taskTotal.forEach((el, index) => {
        if (el.id === action.payload) {
          state.taskTotal[index].status = 'Overdue'
          return
        }
      })
    },
    setTaskStatus: (state, action) => {
      let sign = true;
      state.taskTotal.forEach((el, index) => {
        if (el.id === action.payload) {
          if (state.taskTotal[index].status === "Overdue") {
            sign = false;
          }
          state.taskTotal[index].status = "Completed";
          // console.log()
          state.employeePoints.forEach((el2, i2) => {
            if (el2.value === state.taskTotal[index].assignedTo) {
              if (state.taskTotal[index].priority === "High") {
                state.employeePoints[i2].points.push(sign ? 20 : -20);
                state.employeePoints[i2].taskName  = state.taskTotal[index].title
                state.employeePoints[i2].taskStatus  = state.taskTotal[index].status
              } else if (state.taskTotal[index].priority === "Normal") {
                state.employeePoints[i2].points.push(sign ? 20 : -10);
                state.employeePoints[i2].taskName  = state.taskTotal[index].title
                state.employeePoints[i2].taskStatus  = state.taskTotal[index].status
              } else if (state.taskTotal[index].priority === "Low") {
                state.employeePoints[i2].points.push(sign ? 5 : -5);
                state.employeePoints[i2].taskName  = state.taskTotal[index].title
                state.employeePoints[i2].taskStatus  = state.taskTotal[index].status
              } else if (state.taskTotal[index].priority === "More Prior") {
                state.employeePoints[i2].points.push(sign ? 50 : -50);
                state.employeePoints[i2].taskName  = state.taskTotal[index].title
                state.employeePoints[i2].taskStatus  = state.taskTotal[index].status
              }
            }
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
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export { store };
