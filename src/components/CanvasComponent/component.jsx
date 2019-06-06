import React from 'react';
import './styles.css';

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

    render(){
        return (
            <div className="content-wrapper">
                <div className="canvas-component">
                    <canvas className="canvas-component__canvas-wrapper" ref={this.setCanvas}/>
                </div>
            </div>
        )
    }
}

export default CanvasComponent;
