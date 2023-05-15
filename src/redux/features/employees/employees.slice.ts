import { employeesApi } from '@/redux/services/employees';
import { RootState } from '@/redux/store';
import { Employee } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  employees: Employee[] | null;
  employee: Employee | null;
}

const initialState: InitialState = {
  employees: null,
  employee: null,
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      employeesApi.endpoints.getAllEmployees.matchFulfilled,
      (state, action) => {
        state.employees = action.payload;
      },
    );
    // builder.addMatcher(
    //   employeesApi.endpoints.createEmployee.matchFulfilled,
    //   (state, action) => {
    //     state.employee = action.payload;
    //   },
    // );
    // builder.addMatcher(
    //   employeesApi.endpoints.getEmployee.matchFulfilled,
    //   (state, action) => {
    //     state.employee = action.payload;
    //   },
    // );
  },
});

export default employeeSlice.reducer;

export const selectEmployees = (state: RootState) => state.employees.employees;
