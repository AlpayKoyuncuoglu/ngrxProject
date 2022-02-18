import { createReducer } from "@ngrx/store"
import { initialState } from "src/app/counter/state/counter.state"

const _authReducer = createReducer(initialState)

export function AuthReducer(state, action) {
  return _authReducer(state, action)
}
