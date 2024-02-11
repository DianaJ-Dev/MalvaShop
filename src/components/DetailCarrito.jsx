import PropTypes from 'prop-types';

export const DetailCarrito = ({ onClose, carItems, onVaciarCarrito }) => {
    return (
        <div className="modal show" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Resumen de Carrito</h5>
                        <button type="button" className="close" onClick={() => onClose(false)} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className='card-body'>
                            <h3 className='card-title'>Productos</h3>
                            <br></br>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Articulo</th>
                                        <th scope="col">Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        carItems.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                            <p className='card-text' >Total a pagar: {carItems.reduce((total, item) => total + item.price, 0)} </p>
                           
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary bg-dark" onClick={() => onClose(false)}>Pagar Carrito</button>
                        <button type="button" className="btn btn-secondary bg-dark" onClick={onVaciarCarrito}>Vaciar Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

DetailCarrito.propTypes = {
    onClose: PropTypes.func.isRequired,
    carItems: PropTypes.func.isRequired,
    onVaciarCarrito: PropTypes.func.isRequired,
  };
