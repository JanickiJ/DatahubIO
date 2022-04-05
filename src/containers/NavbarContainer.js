import {connect} from 'react-redux';
import Navbar from '../components/navbar'
import {readConfigFile} from '../utils/config'
import {loadConfig} from '../actions/config'

function mapStateToProps(state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onFileUpload: async (e) => {
            const fileContent = await readConfigFile(e);
            dispatch(loadConfig(fileContent))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)