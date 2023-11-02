import { mealsWatcherSaga } from "./mealsSaga";
import { userWatcherSaga } from "./usersSaga";
import { asyncWatcherSaga } from "./asyncSaga";
import {all } from "redux-saga/effects";


function* rootSaga()
{
    yield all([mealsWatcherSaga(),userWatcherSaga(),asyncWatcherSaga()])
}
export default rootSaga