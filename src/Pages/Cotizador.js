import React from "react";

function Cotizador() {
  return (
    <div>
      <span className="mb-4">
        Realice una cotización de un pedido, con el valor unitario que usted
        concidere conveniente.
      </span>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCantidad">Cantidad</label>
            <input
              type="number"
              name="Cantidad"
              className="form-control"
              id="inputCantidad"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputValorUnitario">ValorUnitario</label>
            <input
              type="number"
              className="form-control"
              id="inputValorUnitario"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputVTotal">Valor total</label>
          <input
            type="number"
            className="form-control"
            id="inputVTotal"
            placeholder="{`$${}`}"
            readOnly
          />
        </div>
        <div className="form-group">
          <label for="inputAddress2">Descrpción del pedido</label>
          <textarea className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-danger">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Cotizador;
