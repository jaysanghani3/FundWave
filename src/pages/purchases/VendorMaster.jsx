import React, {useContext} from 'react'
import MasterTableview from '../../components/MasterTableview';
import SharedContext from '../../contexts/SharedContext'

const VendorMaster = () => {
    const { tableData } = useContext(SharedContext);
    return (<MasterTableview title={"Vendor Master"} tableHeader = {tableData.tableHeader} tableBody = {tableData.vendorData}/>)
}

export default VendorMaster