import React, {useContext} from 'react'
import MasterTableview from '../../components/MasterTableview';
import SharedContext from '../../contexts/SharedContext'

const VendorMaster = () => {
    const { vcHeader, vendorData } = useContext(SharedContext);
    return (<MasterTableview title={"Vendor"} tableHeader = {vcHeader} tableBody = {vendorData}/>)
}

export default VendorMaster