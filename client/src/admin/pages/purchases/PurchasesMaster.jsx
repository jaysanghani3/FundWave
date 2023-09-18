import React, { useContext } from 'react'
import MasterTableview from '../../components/MasterTableview';
import SharedContext from '../../../contexts/SharedContext'

const SalesInvoiceMaster = () => {
    const { invoiceHeader, purchaseData, getPurchaseData } = useContext(SharedContext);
    return (
        <MasterTableview title={"Purchase Bill"} tableHeader={invoiceHeader} tableBody={purchaseData} getInvoiceData={getPurchaseData}/>
    )
}

export default SalesInvoiceMaster
