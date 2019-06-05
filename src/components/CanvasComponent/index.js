import { connect } from 'react-redux';
import component from './component';
import * as actions from './actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    initCanvas: actions.initCanvas,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);