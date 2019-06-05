import { takeEvery, call } from 'redux-saga/effects';
import * as constants from './constants';
import * as vShader from './shaders/vertex-shader.txt';
import * as fShader from './shaders/fragment-shader.txt';

import {
    init,
    createShader,
} from './api/canvasApi';

let gl = null;

export default function* canvasApi () {
    yield takeEvery(constants.INIT_CANVAS, _onInitCanvas);
};

export function* _onInitCanvas({ payload: canvas }) {
    gl = yield call(init, canvas);
}



