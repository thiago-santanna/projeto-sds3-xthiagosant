import { salePageDto } from "types/salePage";

type IProps = {
  page: salePageDto;
  onChangePage: Function;
}

const Pagination = ({ page, onChangePage }: IProps) => {


  return (
    <div className="row d-flex">
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page.first ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onChangePage(page.number - 1)}>Anterior</button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{page.number + 1}</span>
          </li>
          <li className={`page-item ${page.last ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onChangePage(page.number + 1)}>Próxima</button>
          </li>
        </ul>
      </nav>
    </div>

  )
}

export default Pagination;
