import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskTotal: [
    {
      id: 8561,
      title: "Todo",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "2021-06-30",
      assignedTo: "Akash",
      priority: "High",
      duration: 3,
      status: "Pending",
    },
    {
      id: 8562,
      title: "Employee Data",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "2021-06-28",
      assignedTo: "Mike",
      priority: "Medium",
      duration: 2,
      status: "Completed",
    },
    {
      id: 8563,
      title: "Portfolio",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "2021-07-05",
      assignedTo: "Vinay",
      priority: "Low",
      duration: 5,
      status: "Pending",
    },
    {
      id: 8564,
      title: "Website",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "2021-07-10",
      assignedTo: "Kapil",
      priority: "Low",
      duration: 4,
      status: "Pending",
    },
    {
      id: 8565,
      title: "Stock",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "2021-07-26",
      assignedTo: "Akash",
      priority: "High",
      duration: 2,
      status: "Completed",
    },
    {
      id: 8566,
      title: "Stock",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "2021-07-28",
      assignedTo: "Mike",
      priority: "High",
      duration: 2,
      status: "Completed",
    },
    {
      id: 8567,
      title: "Stock",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "2021-07-29",
      assignedTo: "Vinay",
      priority: "High",
      duration: 1,
      status: "Completed",
    },
    {
      id: 8568,
      title: "Stock",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "2021-08-02",
      assignedTo: "Kapil",
      priority: "Low",
      duration: 4,
      status: "Completed",
    },
    {
      id: 8569,
      title: "OS Design",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "2021-08-12",
      assignedTo: "Mike",
      priority: "Low",
      duration: 10,
      status: "Dead",
    },
    {
      id: 8570,
      title: "OS Design",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "2021-08-14",
      assignedTo: "Vinay",
      priority: "More Prior",
      duration: 2,
      status: "Closest",
    },
    {
      id: 8571,
      title: "OS Design",
      descrition:
        "Finished task with given functionalities in the pdf and feel free to add more functionalities in your web app and create ui on your own",
      assignedDate: "2021-08-16",
      assignedTo: "Vinay",
      priority: "More Prior",
      duration: 2,
      status: "Completed",
    },
  ],
  modalActive: false,
  modalTypeAdd: true,
  modalData: [],
  taskId: 8572,
  employeePoints: [
    {
      value: "Akash",
      points: [],
    },
    {
      value: "Mike",
      points: [],
    },
    {
      value: "Vinay",
      points: [],
    },
    {
      value: "Kapil",
      points: [],
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
      state.taskId += state.taskId;
    },
    setTaskStatus: (state, action) => {
      state.taskTotal.forEach((el, index) => {
        if (el.id === action.payload) {
          state.taskTotal[index].status = "Completed";
          state.employeePoints.forEach((el, i2) => {
            if (el.value === state.taskTotal[index].assignedTo) {
              if (state.taskTotal[index].status === "Undue") {
                state.employeePoints[i2].points.push(-10);
              } else if (state.taskTotal[index].priority === "High") {
                state.employeePoints[i2].points.push(20);
              } else if (state.taskTotal[index].priority === "Normal") {
                state.employeePoints[i2].points.push(10);
              } else if (state.taskTotal[index].priority === "Low") {
                state.employeePoints[i2].points.push(6);
              } else if (state.taskTotal[index].priority === "More Prior") {
                state.employeePoints[i2].points.push(50);
              }
            }
          });
        }
      });
    },
  },
});

export const dataActions = dataSlice.actions;

export const store = configureStore({
  reducer: dataSlice.reducer,
});
