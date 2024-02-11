import PropTypes from 'prop-types';

export const Section = ({ onClickFilter }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" onClick={() => onClickFilter('All')}>NUEVO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={() => onClickFilter('Mujer')}>MUJER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={() => onClickFilter('Hombre')}>HOMBRE</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active" onClick={() => onClickFilter('Belleza')}>BELLEZA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={() => onClickFilter('All')}>DECORACIÓN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={() => onClickFilter('All')}>NIÑAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={() => onClickFilter('All')}>DISEÑADORES</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active" onClick={() => onClickFilter('All')}>TOKTOK</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active" onClick={() => onClickFilter('All')}>SALE</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
}

Section.propTypes = {
    onClickCarrito: PropTypes.func.isRequired,
    onClickFilter: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
}