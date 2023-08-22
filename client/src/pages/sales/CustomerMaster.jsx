import React, { useContext } from 'react'
import MasterTableview from '../../components/MasterTableview';
import SharedContext from '../../contexts/SharedContext'

const CustomerMaster = () => {
    const { vcHeader, customerData, getCustomerData} = useContext(SharedContext);
    return (
        <MasterTableview title={"Customer"} tableHeader={vcHeader} tableBody={customerData} getCustomerData={getCustomerData}/>
    )
}

export default CustomerMaster
