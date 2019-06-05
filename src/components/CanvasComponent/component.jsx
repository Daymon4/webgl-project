import React from 'react';
import './styles.css';

class CanvasComponent extends React.PureComponent {

    componentDidMount() {
        const { initCanvas } = this.props;

        initCanvas(this.canvas);
    }

    shouldComponentUpdate() {
        return false;
    }


    setCanvas = node => this.canvas = node;

    render(){
        return (
            <div className="canvas-component">
                <canvas className="canvas-component__canvas-wrapper" ref={this.setCanvas}/>
            </div>
        )
    }
}

export default CanvasComponent;