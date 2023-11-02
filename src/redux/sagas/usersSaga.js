import { call,retry,take, cancelled, put, takeLatest, fork, cancel } from "redux-saga/effects";
import { GET_USERS,PAGE_LEAVE_ACTION} from "../actions/actionTypes";
import { getData } from '../../apis'
import { fetchUserError, fetchUserSuccess} from '../actions/userActions'
import {setLoader} from '../actions/mealActions'
import axios from 'axios'

export function* userWorkerSaga() {
    const source = axios.CancelToken.source()
    try {
        yield put(setLoader(true))
        const response = yield call(getData, '/users',{cancelToken:source.token})
        //const response = yield retry(5, 2000, getData, '/users', { cancelToken: source.token })
        console.log(response.data)
        yield put(fetchUserSuccess(response.data))
        // const state=yield select()
    }
    catch (error) {
        yield put(fetchUserError(error))
    }
    finally {    
        yield put(setLoader(false))   
        // if (yield cancelled()){
        //     console.log("SAGA Cancelled")
        // source.cancel("Cancel API Call")
        //}
       
    }

}
export function* userWatcherSaga() {
    //yield takeEvery(FETCH_UserS, userWorkerSaga)
    yield takeLatest(GET_USERS, userWorkerSaga)
}
// export function* userSaga() {
//     yield take(GET_USERS)
//     const t1 = yield fork(userWatcherSaga)
//     const paction = yield take(PAGE_LEAVE_ACTION)    
//     if (paction.type === PAGE_LEAVE_ACTION) {
//         yield cancel(t1)
//     }
// }