import React, {useContext} from 'react'
import MasterTableview from '../../components/MasterTableview';
import SharedContext from '../../contexts/SharedContext'

const CustomerMaster = () => {
    const { tableData } = useContext(SharedContext);
    return (<MasterTableview title={"Customer"} tableHeader = {tableData.tableHeader} tableBody = {tableData.customerData}/>)
}

export default CustomerMaster
