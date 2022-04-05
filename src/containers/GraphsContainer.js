import { connect } from 'react-redux';
import Graphs from '../components/graphs'
import {graphsSelector} from '../utils/selectors/graphs'
import store from "../store/store"

function mapStateToProps (state, ownProps){

    const graphs = graphsSelector(state)
    return {
        graphs: graphs,
        sortIntoGrid: sortIntoGrid
    } 
}

function mapDispatchToProps (dispatch, ownProps){
    return {
    }
}

const sortIntoGrid = (graphs,chunk = 3) => {
    let array = graphs || [];
    let result = [];
    for (let i = 0; i < array.length; i += chunk)
        result.push(array.slice(i, i + chunk));
    return result;
};

export default connect(mapStateToProps,mapDispatchToProps)(Graphs)