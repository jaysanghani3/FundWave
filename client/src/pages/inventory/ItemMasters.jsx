import React, {useContext} from 'react'
import MasterTableview from '../../components/MasterTableview';
import SharedContext from '../../contexts/SharedContext'

const ItemMasters = () => {
    const { itemTableData } = useContext(SharedContext);
    return (
        <MasterTableview title={"Item"} tableHeader = {itemTableData.itemTableHeader} tableBody = {itemTableData.itemData}/>
    )
}

export default ItemMasters
