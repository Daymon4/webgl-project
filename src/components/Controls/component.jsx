import React from 'react';

class Sliders extends React.Component {
    state = {
        x: 0,
        y: 0,
        angle: 0,
    };

    setTranslateX = e => {
        const { translate } = this.props;
        const { y } = this.state;
        const x = e.target.value;

        translate({ x, y });
        this.setState({ x });
    };

    setTranslateY = e => {
        const { translate } = this.props;
        const { x } = this.state;
        const y = e.target.value;

        translate({ x, y });
        this.setState({ y });
    };
    setRotate = e => {
        const { rotate } = this.props;
        const angle = e.target.value;

        rotate(angle);
        this.setState({ angle });
    };

    changeColor = () => {
        const { changeColor } = this.props;

        changeColor(Math.random(), Math.random(), Math.random(), 1);
    };

    render() {
        const {
            setTranslateX,
            setTranslateY,
            changeColor,
            setRotate,
        } = this;

        const { startProgram } = this.props;

        return (
            <>
                <div className="buttons">
                    <button onClick={startProgram}>Start</button>
                    <button onClick={changeColor}>ChangeColor</button>
                </div>
                {/*<div className="sliders">*/}
                {/*    <div className="slider-translate-x">*/}
                {/*        <label>Translate X</label>*/}
                {/*        <input type="range" min={1} max={1280} defaultValue={0} onChange={setTranslateX}/>*/}
                {/*    </div>*/}
                {/*    <div className="slider-translate-y">*/}
                {/*        <label>Translate Y</label>*/}
                {/*        <input type="range" min={1} defaultValue={0}  max={720} onChange={setTranslateY}/>*/}
                {/*    </div>*/}
                {/*    <div className="slider-rotate">*/}
                {/*        <label>Rotate</label>*/}
                {/*        <input type="range" min={0} defaultValue={0}max={359} onChange={setRotate}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </>
        )
    }
}

export default Sliders;
