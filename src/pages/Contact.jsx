

export const Contact = () => {
  return (
    <>
    <div className="container mt-5">
      <h1 className="text-muted text-center">Nos encantaría escucharte, escríbenos.</h1>

      <form>
        <fieldset>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              Correo
            </label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              Asunto
            </label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextarea" className="form-label">
              Deja tu comentario
            </label>
            <textarea
              id="disabledTextarea"
              className="form-control"
              rows="5"  
            />
          </div>  
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </fieldset>
      </form>
    </div>
    
    </>
     
  )
}
