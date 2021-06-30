import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskTotal: [
    {
      id: 8561,
      title: "Todo",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "30th june 2021",
      assignedTo: "Akash",
      priority: 3,
      duration: 3,
      status: "Pending",
    },
    {
      id: 8562,
      title: "Employee Data",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "28th june 2021",
      assignedTo: "Akash",
      priority: 2,
      duration: 2,
      status: "Completed",
    },
    {
      id: 8563,
      title: "Portfolio",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "5th july 2021",
      assignedTo: "Akash",
      priority: 1,
      duration: 5,
      status: "Pending",
    },
    {
      id: 8564,
      title: "Website",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "10th july 2021",
      assignedTo: "Akash",
      priority: 1,
      duration: 4,
      status: "Pending",
    },
    {
      id: 8565,
      title: "Stock",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "26th july 2021",
      assignedTo: "Akash",
      priority: 3,
      duration: 2,
      status: "Completed",
    },
    {
      id: 8566,
      title: "OS Design",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "22nd june 2021",
      assignedTo: "Akash",
      priority: 1,
      duration: 10,
      status: "Dead",
    },
    {
      id: 8567,
      title: "OS Design",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "22nd june 2021",
      assignedTo: "Akash",
      priority: 1,
      duration: 10,
      status: "Closest",
    },
  ],
  modalActive: false,
  modalTypeAdd: true,
  modalData: [],
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
      } else {
        state.modalTypeAdd = true;
      }
      state.modalData.push(action.payload.data);
    },
  },
});

export const dataActions = dataSlice.actions;

export const store = configureStore({
  reducer: dataSlice.reducer,
});
