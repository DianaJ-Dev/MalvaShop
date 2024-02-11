import { useState } from 'react';
import { allBrands } from './ArrayThePoduct';
import { DetailProduct } from './DetailProduct';
import PropTypes from 'prop-types';

export const TipeOfItems = ({ onClickAddItem, filterValue, inputValue }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const clickDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeDetail = () => {
    setSelectedProduct(null);
  };

  if (inputValue !== null) {
    const items = allBrands.filter((product) => product.name === inputValue);

    return (
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {items.map((product) => (
          <div className='col' key={product.id}>
            <div className='card'>
              <img className='card-img-top' src={product.img} alt={product.detail} />
              <div className='card-body'>
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text'>{product.price}</p>
                <button onClick={() => clickDetail(product)} className='btn btn-primary'>
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        ))}

        {selectedProduct && (
          <DetailProduct product={selectedProduct} onClose={closeDetail} onClickAddCarrito={onClickAddItem} />
        )}
      </div>
    );
  }

  const items = filterValue === 'All' ? allBrands : allBrands.filter((item) => item.tipo === filterValue);

  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {items.map((product) => (
        <div className='col' key={product.id}>
          <div className='card'>
            <img className='card-img-top' src={product.img} alt={product.detail} />
            <div className='card-body'>
              <h5 className='card-title'>{product.name}</h5>
              <p className='card-text'>{product.price}</p>
              <button onClick={() => clickDetail(product)} className='btn btn-primary bg-dark'>
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      ))}

      {selectedProduct && (
        <DetailProduct product={selectedProduct} onClose={closeDetail} onClickAddCarrito={onClickAddItem} />
      )}
    </div>
  );
};

TipeOfItems.propTypes = {
  onClickAddItem: PropTypes.func.isRequired,
  filterValue:PropTypes.func.isRequired,
  inputValue:PropTypes.func.isRequired,

};