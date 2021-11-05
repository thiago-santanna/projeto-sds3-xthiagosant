import { useState, useEffect } from 'react';
import { salePageDto } from 'types/salePage';
import axios from 'axios';
import { URL_BASE_PROD } from 'utils/request';
import { formatLocalDate } from 'utils/formatDate';
const DataTable = () => {
    const [page, setPage] = useState<salePageDto>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0,
    })

    useEffect(() => {
        axios.get(`${URL_BASE_PROD}/sales?page=0&size=20&sort=date,desc`)
            .then(response => {
                setPage(response.data);
            })
    }, [])

    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            page.content?.map(sale => (
                                <tr key={sale.id}>
                                    <td>{formatLocalDate(sale.date, 'dd/MM/yyyy')}</td>
                                    <td>{sale.seller.name}</td>
                                    <td>{sale.visited}</td>
                                    <td>{sale.deals}</td>
                                    <td>{sale.amount.toFixed(2)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DataTable;