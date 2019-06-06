import * as constants from './constants';

export const initCanvas = (canvas, dimensions) => ({
    type: constants.INIT_CANVAS,
    payload: { canvas, dimensions },
});
