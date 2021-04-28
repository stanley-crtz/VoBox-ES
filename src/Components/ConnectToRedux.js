import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    User: state
})

const mapDispatchToProps = dispatch => ({
    changeUser(USER) {
        dispatch({
            type: "CHANGE_USER",
            USER
        })
    }
})
export const ConnectToRedux = (Component) => connect(mapStateToProps, mapDispatchToProps)(Component);
