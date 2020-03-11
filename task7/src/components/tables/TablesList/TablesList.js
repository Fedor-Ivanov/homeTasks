import React, { useEffect } from 'react'
import './TablesList.css'
import { connect } from 'react-redux'
import { getTables, deleteTable } from '../../../store/actions/tables'
import apiTables from '../../../services/apiTables'
import TablesItem from '../TablesItem/TablesItem'
import { useRouteMatch, Link } from 'react-router-dom'



function TablesList({ getTables, deleteTable, tables }) {

    const { url } = useRouteMatch();


    useEffect(() => {
        apiTables.get('').then(resp => getTables(resp.data));
    }, []);

    return (
        <>
            <button>
                <Link to={`${url}/new`}>add</Link>
            </button>
            <ul>
                {tables.map(item => (
                    <TablesItem key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        sitsCount={item.sitsCount}
                        deleteTable={deleteTable}
                    >

                    </TablesItem>
                ))}
            </ul>

        </>
    )
}

function mapStateToProps({ tables }) {
    return {
        tables: tables.list
    }
}

const mapDispatchToProps = {
    getTables: getTables,
    deleteTable: deleteTable
};

export default connect(mapStateToProps, mapDispatchToProps)(TablesList)

