import * as constants from './constants';

export const initCanvas = canvas => ({
    type: constants.INIT_CANVAS,
    payload: canvas,
});