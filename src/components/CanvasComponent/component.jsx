import React from 'react';
import './styles.css';
import Sliders from "./components/Sliders";

class CanvasComponent extends React.Component {
    componentDidMount() {
        const { initCanvas } = this.props;
        const dimensions = this.canvas.getBoundingClientRect();

        initCanvas(this.canvas, dimensions);
    }

    shouldComponentUpdate() {
        return false;
    }

    setCanvas = node => this.canvas = node;

    changeColor = () => {
        const { changeColor } = this.props;

        changeColor(Math.random(), Math.random(), Math.random(), 1);
    };

    render(){
        const {
            startProgram,
            translate,
            rotate,
        } = this.props;

        return (
            <div className="content-wrapper">
                <div className="canvas-component">
                    <canvas className="canvas-component__canvas-wrapper" ref={this.setCanvas}/>
                </div>
                <div className="buttons">
                    <button onClick={startProgram}>Start</button>
                    <button onClick={this.changeColor}>ChangeColor</button>
                </div>
                <Sliders translate={translate} rotate={rotate}/>
            </div>
        )
    }
}

export default CanvasComponent;