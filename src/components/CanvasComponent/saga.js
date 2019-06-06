import { takeEvery, call } from 'redux-saga/effects';
import * as constants from './constants';
import * as controlsConstants from '../Controls/constants';
import * as vShader from './shaders/vertex-shader.glsl';
import * as fShader from './shaders/fragment-shader.glsl';

import {
    init,
    drawArrays,
    createShader,
    createProgram,
    setUpVertexArrayBuffer,
} from './api/canvasApi';

let gl = null;
let colorLocation;
let positionLocation;
// let rotationLocation;
let resolutionLocation;
// let translationLocation;

export default function* canvasApi () {
    yield takeEvery(constants.INIT_CANVAS, _onInitCanvas);
    yield takeEvery(controlsConstants.START_PROGRAM, _onStartProgram);
    yield takeEvery(controlsConstants.CHANGE_COLOR, _onDrawColorProgram);
    // yield takeEvery(constants.ROTATE, _onRotate);
    // yield takeEvery(constants.TRANSLATE, _onTranslate);
};

export function* _onInitCanvas({ payload }) {
    const { canvas, dimensions } = payload;
    gl = yield call(init, canvas, dimensions);
}

export function* _onStartProgram  () {
    let vShaderSource = '';
    let fShaderSource = '';

    yield fetch(vShader).then(
        response =>  response.text().then(text => vShaderSource = text)
    );

    const vertexShader = yield call(createShader, gl, gl.VERTEX_SHADER, vShaderSource);

    yield fetch(fShader).then(
        response =>  response.text().then(text => fShaderSource = text)
    );

    const fragmentShader = yield call(createShader, gl, gl.FRAGMENT_SHADER, fShaderSource);

    const program = createProgram(gl, vertexShader, fragmentShader);

    positionLocation = gl.getAttribLocation(program, 'a_position');
    // translationLocation = gl.getUniformLocation(program, 'u_translation');
    resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    // rotationLocation = gl.getUniformLocation(program, 'u_rotation');
    colorLocation = gl.getUniformLocation(program, 'u_color');

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    setGeometry();

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.enableVertexAttribArray(positionLocation);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    yield call(_drawInitial)
}

const setGeometry = () => {
    // My data
    const positions = [
        0, 0,
        0, 80,
        140, 0,
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
};

export function* _onDrawColorProgram({ payload }) {
    yield call(_drawColor, payload);
}

// export function* _onRotate({ payload }) {
//     const radAngle = Math.PI * payload / 180;
//     yield call(_drawRotate, radAngle);
// }
//
// export function* _onTranslate({ payload }) {
//     const translation = [
//         payload.x,
//         payload.y,
//     ];
//     yield call(_drawTranslate, translation);
// }

export function* _drawInitial() {
    yield call(setUpVertexArrayBuffer, gl, 2, gl.FLOAT, 0, 0, false, positionLocation);
    // const initPosition = [0, 0];
    // const initRotation = [0, 1];
    const initColor = [1.0, 0.5, 0.0, 1.0];

    gl.uniform4f(colorLocation, ...initColor);
    gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
    // gl.uniform2fv(rotationLocation, initRotation);
    // gl.uniform2fv(translationLocation, initPosition);
    yield call(drawArrays, gl, gl.TRIANGLES, 0, 3);
}

export function* _drawColor(color) {
    yield call(setUpVertexArrayBuffer, gl, 2, gl.FLOAT, 0, 0, false, positionLocation);

    gl.uniform4f(colorLocation, ...color);
    yield call(drawArrays, gl, gl.TRIANGLES, 0, 3);
}

// export function* _drawRotate(angle) {
//     yield call(setUpVertexArrayBuffer, gl, 2, gl.FLOAT, 0, 0, false, positionLocation);
//     const rotation = [Math.sin(angle), Math.cos(angle)];
//
//     gl.uniform2fv(rotationLocation, rotation);
//     yield call(drawArrays, gl, gl.TRIANGLES, 0, 3);
// }

// export function* _drawTranslate(translation) {
//     yield call(setUpVertexArrayBuffer, gl, 2, gl.FLOAT, 0, 0, false, positionLocation);
//     gl.uniform2fv(translationLocation, translation);
//     yield call(drawArrays, gl, gl.TRIANGLES, 0, 3);
// }



