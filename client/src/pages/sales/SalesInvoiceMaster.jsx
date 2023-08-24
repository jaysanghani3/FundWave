import React, { useContext } from 'react'
import MasterTableview from '../../components/MasterTableview';
import SharedContext from '../../contexts/SharedContext'

const SalesInvoiceMaster = () => {
    const { invoiceHeader, invoiceData, getInvoiceData } = useContext(SharedContext);
    return (
        <MasterTableview title={"Sales Invoice"} tableHeader={invoiceHeader} tableBody={invoiceData} getCustomerData={getInvoiceData}/>
    )
}

export default SalesInvoiceMaster
