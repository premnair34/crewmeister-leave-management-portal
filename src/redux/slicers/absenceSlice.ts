import { createSlice } from '@reduxjs/toolkit'
import { HEADERS, LEAVE_TYPES } from './../../constants'
import { AbsenceState } from 'src/redux/types/absenceTypes'
const initialState: AbsenceState = {
  rawData: [],
  absentees: [],
  totalAbsentees: 0,
  loading: true,
  filter: {
    startDate: '',
    endDate: '',
    leaveType: '',
  },
  headers: HEADERS,
  leaveTypes: LEAVE_TYPES,
  filteredAbsentees: [],
  page: 1,
  limit: 10,
}

export const absenceSlice = createSlice({
  name: 'absence',
  initialState,
  reducers: {
    setRawData: (state, action) => ({
      ...state,
      rawData: action.payload,
    }),
    setAbsentees: (state, action) => ({
      ...state,
      absentees: action.payload,
    }),
    setPageLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setFilter: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
    setPage: (state, action) => ({
      ...state,
      page: action.payload,
    }),
    setFilteredAbsentees: (state, action) => ({
      ...state,
      filteredAbsentees: action.payload,
    }),
    setTotal: (state, action) => ({
      ...state,
      totalAbsentees: action.payload,
    }),
  },
})
