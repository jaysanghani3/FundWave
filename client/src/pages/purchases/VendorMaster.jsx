import React, {useContext} from 'react'
import MasterTableview from '../../components/MasterTableview';
import SharedContext from '../../contexts/SharedContext'

const VendorMaster = () => {
    const { vcTableData } = useContext(SharedContext);
    return (<MasterTableview title={"Vendor"} tableHeader = {vcTableData.tableHeader} tableBody = {vcTableData.vendorData}/>)
}

export default VendorMaster