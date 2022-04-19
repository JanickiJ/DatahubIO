import {connect} from 'react-redux';
import Navbar from '../components/navbar'
import {readConfigFile} from '../utils/config'
import {loadConfig} from '../actions/config'
import {configNameSelector} from '../utils/selectors/config'

function mapStateToProps(state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onFileUpload: async (e) => {
            const fileContent = await readConfigFile(e);
            console.log("INFO")
            console.log(fileContent);
            dispatch(loadConfig(fileContent.charts, e.target.files[0].name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)