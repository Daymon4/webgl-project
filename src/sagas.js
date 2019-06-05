import { all, call } from 'redux-saga/effects';
import canvasApi from './components/CanvasComponent/saga';

export default function* watchRootSags() {
    yield all([
        call(canvasApi),
    ]);
};