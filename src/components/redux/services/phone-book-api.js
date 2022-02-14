import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PhoneBookApi = createApi({
  reducerPath: 'PhoneBookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6203af0f4d21c200170b9f5a.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: ({ nick, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          nick,
          number,
        },
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: todoId => ({
        url: `/contacts/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});
export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = PhoneBookApi;
