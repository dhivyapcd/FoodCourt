import { retry, call, take, cancelled, put, select, takeEvery, takeLatest, fork, cancel } from "redux-saga/effects";
import { FETCH_PRODUCTS, PAGE_LEAVE_ACTION } from "../actions/actionTypes";
import { getData } from '../../apis'
import { fetchProductError, fetchProductSuccess, setLoader } from '../actions/mealActions'
import axios from 'axios'

export function* mealsWorkerSaga() {
    const source = axios.CancelToken.source()
    try {
        yield put(setLoader(true))
         const response = yield call(getData, '/meals',{cancelToken:source.token})
       // const response = yield retry(5, 2000, getData, '/meals', { cancelToken: source.token })
        yield put(fetchProductSuccess(response.data))
        // const state=yield select()
    }
    catch (error) {
        yield put(fetchProductError(error))
    }
    finally {
        yield put(setLoader(false))
        // if (yield cancelled()) {
        //     console.log("SAGA Cancelled")
        //     source.cancel("Cancel API Call")
        // }

    }

}
export function* mealsWatcherSaga() {
    //yield takeEvery(FETCH_PRODUCTS, mealsWorkerSaga)
    yield takeLatest(FETCH_PRODUCTS, mealsWorkerSaga)
}
// export function* mealsSaga() {
//     while (true) {
//         yield take(FETCH_PRODUCTS)
//         const t1 = yield fork(mealsWatcherSaga)
//         const pageleaveaction = yield take(PAGE_LEAVE_ACTION)
//         console.log(pageleaveaction)
//         if (pageleaveaction.type === PAGE_LEAVE_ACTION) {
//             yield cancel(t1)
//         }
//     }
// }