import { all, fork } from "@redux-saga/core/effects";

import { watchGetPosts } from "./post/sagas";
import { watchGetUsers } from "./user/sagas";

export function* rootSaga() {
  yield all([
    fork(watchGetPosts),
    fork(watchGetUsers)
  ]);
}
