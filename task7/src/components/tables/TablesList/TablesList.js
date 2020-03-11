import React, { useEffect } from 'react'
import './TablesList.css'
import { connect } from 'react-redux'
import { getTables } from '../../../store/actions/tables'
import apiTables from '../../../services/apiTables'
import TablesItem from '../TablesItem/TablesItem';


function TablesList({ getTables, tables }) {

    useEffect(() => {
        apiTables.get('').then(resp => getTables(resp.data));
    }, []);

    return (
        <div>
            {tables.map(item => (
                <TablesItem key={item.id}
                    name={item.name}
                >

                </TablesItem>
            ))}
        </div>
    )
}

function mapStateToProps({ tables }) {
    return {
        tables: tables.list
    }
}

const mapDispatchToProps = {
    getTables: getTables
};

export default connect(mapStateToProps, mapDispatchToProps)(TablesList)

