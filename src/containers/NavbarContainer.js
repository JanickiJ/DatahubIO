import {connect} from 'react-redux';
import Navbar from '../components/Navbar'
import {readConfigFile} from '../utils/config'
import {loadConfig} from '../actions/config'
import {configNameSelector} from '../utils/selectors/config'

function mapStateToProps(state, ownProps) {
    const tabs = ["graph1","graph2"];
    console.log("nav con");
    console.log(state);
    return {
        tabs
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onFileUpload: async (e) => {
            const fileContent = await readConfigFile(e);
            dispatch(loadConfig(fileContent.charts, e.target.files[0].name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)