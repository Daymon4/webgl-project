import { connect } from 'react-redux';
import component from './component';
import * as actions from './actions';

const mapDispatchToProps = {
    initCanvas: actions.initCanvas,
};

export default connect(
    null,
    mapDispatchToProps,
)(component);
