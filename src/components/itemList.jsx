import React, { useState } from 'react';
import Item from "./item";
import './itemList.css';
import { Link } from "react-router-dom";
import Loading from "./loading";

const ItemList = ({ productos, titulo }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; 


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {productos.length === 0 ? (
        <Loading />
      ) : (
        <div className="container">
          <h2 className="main title text-white">{titulo}</h2>
          <div className="container">
            <div className="row rounded">
            <ul className="nav justify-content-center gap-5">
                      <li className="nav-item">
                          <Link to="/productos" className="button">Todos</Link>
                      </li>
                      <li className="nav-item">
                          <Link  to="/productos/Procesadores"  className="button">Procesadores</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/productos/Placas de video"  className="button">Placas de video</Link>
                      </li>
                      <li className="nav-item">
                          <Link  to="/productos/Memorias Ram"  className="button">Memorias Ram</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/productos/Fuentes" className="button">Fuentes</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/productos/Mothers"  className="button">Mothers</Link>
                      </li>
                      <li className="nav-item">
                          <Link  to="/productos/Discos"  className="button">Discos</Link>
                      </li>
              </ul>
              {currentProducts.map((prod) => <Item producto={prod} key={prod.id} />)}
              <div className='d-flex justify-content-center'>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button className="page-link" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                      Previous
                    </button>
                  </li>
                  {Array.from({ length: Math.ceil(productos.length / productsPerPage) }, (_, i) => i + 1).map((pageNumber) => (
                    <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => paginate(pageNumber)}>
                        {pageNumber}
                      </button>
                    </li>
                  ))}
                  <li className="page-item">
                    <button className="page-link" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(productos.length / productsPerPage)}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
              </div>
             
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemList;