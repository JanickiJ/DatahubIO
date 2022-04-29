import {connect} from 'react-redux';
import MenuList from '../components/MenuList'
import {readConfigFile} from '../utils/config'
import {loadConfig} from '../actions/config'

function mapStateToProps(state, ownProps) {
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onFileUpload: async (e) => {
            const fileContent = await readConfigFile(e);
            dispatch(loadConfig(fileContent.charts, e.target.files[0].name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList)