import { createSlice } from '@reduxjs/toolkit'

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    eventsById: {
      1: { id: '1', title: 'reminder 1', start: '2020-11-01T09:24', display: 'block', backgroundColor: '#d9534f' },
      2: { id: '2', title: 'reminder 4', start: '2020-11-01T09:24', display: 'block', backgroundColor: '#d9534f' },
      3: { id: '3', title: 'reminder 2', start: '2020-11-01T06:24', display: 'block', backgroundColor: '#0275d8' },
      4: { id: '4', title: 'reminder 3', start: '2020-11-02T21:24', display: 'block', backgroundColor: '#0275d8' }
    },
    guid: 4
  },
  reducers: {
    createEvent: (state, action) => {
      state.guid++
      action.payload.id = String(state.guid)
      state.eventsById[state.guid] = action.payload
    },
    updateEvent: (state, action) => {
      state.eventsById[action.payload.id] = action.payload
    },
    deleteEvent: (state, action) => {
      delete state.eventsById[action.payload]
    }
  }
})

export const { createEvent, updateEvent, deleteEvent } = calendarSlice.actions

export const selectEventsById = state => state.calendar.eventsById

export default calendarSlice.reducer
