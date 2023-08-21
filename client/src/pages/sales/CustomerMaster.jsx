import React, { useContext } from 'react'
import MasterTableview from '../../components/MasterTableview';
import SharedContext from '../../contexts/SharedContext'

const CustomerMaster = () => {
    const { vcHeader, customerData} = useContext(SharedContext);
    return (
        <MasterTableview title={"Customer"} tableHeader={vcHeader} tableBody={customerData} />
    )
}

export default CustomerMaster
