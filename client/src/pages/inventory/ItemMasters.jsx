import React, {useContext} from 'react'
import MasterTableview from '../../components/MasterTableview';
import SharedContext from '../../contexts/SharedContext'

const ItemMasters = () => {
    const { itemTableHeader,itemData, getItemData } = useContext(SharedContext);
    return (
        <MasterTableview title={"Item"} tableHeader = {itemTableHeader} tableBody = {itemData} getItemData={getItemData}/>
    )
}

export default ItemMasters
