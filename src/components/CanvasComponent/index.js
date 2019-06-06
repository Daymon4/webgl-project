import { connect } from 'react-redux';
import component from './component';
import * as actions from './actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    rotate: actions.rotate,
    translate: actions.translate,
    initCanvas: actions.initCanvas,
    changeColor: actions.changeColor,
    startProgram: actions.startProgram,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);