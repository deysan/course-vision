import { Link } from 'react-router-dom';

import range from 'lodash.range';

type Props = {
  itemsCount: number;
  pageSize: number;
  onPageChange: (index: number) => void;
  currentPage: number;
};

function Pagination(props: Props) {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = range(1, pageCount + 1);

  if (pageCount === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        <li>
          <Link
            to={`?page=${currentPage - 1}`}
            onClick={() => onPageChange(currentPage - 1)}
            style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto' }}
          >
            «
          </Link>
        </li>
        {pages.map(page => (
          <li key={`page-${page}`}>
            <Link
              to={`?page=${page}`}
              onClick={() => onPageChange(page)}
              className={`${currentPage === page ? 'active' : ''}`}
            >
              {page}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to={`?page=${currentPage + 1}`}
            onClick={() => onPageChange(currentPage + 1)}
            style={{ pointerEvents: currentPage === pageCount ? 'none' : 'auto' }}
          >
            »
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
