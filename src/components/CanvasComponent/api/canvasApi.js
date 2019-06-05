export const init = canvas => {
    try {
        const gl = canvas.getContext('webgl');
        if (gl) {
            clearCanvas(gl);
            console.log('CANVAS::INITIATED');

            return gl;
        }
    } catch(e) {
        console.log('CANVAS::COULD NOT INITIATE');

        return null;
    }
};

export const clearCanvas = gl => {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
};

export const createShader = (gl, type, source) => {
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (success) {
        return shader;
    } else {
        console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
    }
};

export const createProgram = (gl, vertexShader, fragmentShader) => {
    const program = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);

    if (success) {
        return program;
    }

    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
};

export const drawArrays = (gl, primitiveType, offset, count) => {
    gl.drawArrays(primitiveType, offset, count);
};