import { Room } from '~/interfaces/room'

export interface State {
  apiUrl: string
  token: string
  darkTheme: boolean
  room: undefined | Room
}

export const state = () =>
  <State>{
    apiUrl: 'http://localhost:4000',
    token: '',
    darkTheme: false,
    room: undefined,
  }

export const mutations = {
  changeTheme(state: State) {
    state.darkTheme = !state.darkTheme
  },
  updateRoom(state: State, room: Room) {
    state.room = room
  },
}
