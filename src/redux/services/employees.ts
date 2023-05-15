import { Employee, EmployeeWithoutId } from '@/types/user';
import { api } from './api';

export const employeesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllEmployees: builder.query<Employee[], void>({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
    }),
    getEmployee: builder.query<Employee, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
    }),
    createEmployee: builder.mutation<Employee, EmployeeWithoutId>({
      query: (employee) => ({
        url: `/users/add`,
        method: 'POST',
        body: employee,
      }),
    }),
    editEmployee: builder.mutation<string, Employee>({
      query: (employee) => ({
        url: `/users/edit/${employee.id}`,
        method: 'PUT',
        body: employee,
      }),
    }),
    removeEmployee: builder.mutation<string, string>({
      query: (id) => ({
        url: `/users/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useGetEmployeeQuery,
  useCreateEmployeeMutation,
  useEditEmployeeMutation,
  useRemoveEmployeeMutation,
} = employeesApi;

export const {
  endpoints: {
    getAllEmployees,
    getEmployee,
    createEmployee,
    editEmployee,
    removeEmployee,
  },
} = employeesApi;
