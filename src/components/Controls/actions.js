import * as constants from './constants';

export const startProgram = () => ({
    type: constants.START_PROGRAM,
});

export const changeColor = color => ({
    type: constants.CHANGE_COLOR,
    payload: [Math.random(), Math.random(), Math.random(), 1],
});

export const translate = translation => ({
    type: constants.TRANSLATE,
    payload: translation,
});

export const rotate = angle => ({
    type: constants.ROTATE,
    payload: angle,
});
