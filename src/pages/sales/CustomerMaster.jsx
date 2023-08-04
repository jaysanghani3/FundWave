import React, {useContext} from 'react'
import MasterTableview from '../../components/MasterTableview';
import SharedContext from '../../contexts/SharedContext'

const CustomerMaster = () => {
    const { vcTableData , custorJson} = useContext(SharedContext);
    return (<MasterTableview title={"Customer"} tableHeader = {vcTableData.tableHeader} tableBody = {custorJson}/>)
}

export default CustomerMaster
