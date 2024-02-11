import PropTypes from 'prop-types';

export const DetailProduct = ({ product, onClose, onClickAddCarrito }) => {

const addCarrito = (item) => {
  onClickAddCarrito(item);
  onClose();
  alert('Agregado al Carrito')
}

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
            <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img src={product.img} alt={product.detail} className='card-img-top' />
            <div className='card-body'>
              <h3 className='card-title'>tipo: {product.tipo}</h3>
              <br></br>
              <p className='card-text'>Valor:{product.price}</p>
              <p className='card-text'>{product.detail}</p>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary bg-dark" 
              onClick={() => addCarrito({
                  name: product.name,
                  price: product.price,
            } )}>Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailProduct.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tipo: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      detail: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onClickAddCarrito:PropTypes.func.isRequired,

  };