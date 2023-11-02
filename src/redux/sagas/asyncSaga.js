import { all,take,fork, takeLatest,cancel } from "@redux-saga/core/effects";
import { mealsWorkerSaga } from "./mealsSaga";
import { userWorkerSaga } from "./usersSaga";
import { FETCH_MEALS_USERS,PAGE_LEAVE_ACTION} from "../actions/actionTypes"

export function* asyncWorkerSaga(){
    yield all([mealsWorkerSaga(),
    userWorkerSaga()])
}
export function* asyncWatcherSaga(){
    yield takeLatest(FETCH_MEALS_USERS,asyncWorkerSaga)
}
// export function* asyncSaga() {
//     yield take(FETCH_MEALS_USERS)
//     const t1 = yield fork(asyncWatcherSaga)
//     const paction = yield take(PAGE_LEAVE_ACTION)    
//     if (paction.type === PAGE_LEAVE_ACTION) {
//         yield cancel(t1)
//     }
// }