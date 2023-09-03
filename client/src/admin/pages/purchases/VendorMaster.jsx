import React, {useContext} from 'react'
import MasterTableview from '../../components/MasterTableview';
import SharedContext from '../../../contexts/SharedContext'

const VendorMaster = () => {
    const { vcHeader, vendorData, getVendorData } = useContext(SharedContext);
    return (<MasterTableview title={"Vendor"} tableHeader = {vcHeader} tableBody = {vendorData} getVendorData={getVendorData}/>)
}

export default VendorMaster