import { connect } from 'react-redux';
import component from './component';
import * as actions from './actions';

const mapDispatchToProps = {
    rotate: actions.rotate,
    translate: actions.translate,
    changeColor: actions.changeColor,
    startProgram: actions.startProgram,
};

export default connect(
    null,
    mapDispatchToProps,
)(component);
