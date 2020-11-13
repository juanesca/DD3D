import React from "react";

function Cotizador() {


  return (
    <div>
      <div className="" id="ctz">
        <span className="mb-4">
          Realice una cotización de un pedido, con el valor unitario que usted
          concidere conveniente.
        </span>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCantidad">Cantidad</label>
              <input
                type="number"
                name="Cantidad"
                className="form-control"
                id="inputCantidad"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputValorUnitario">ValorUnitario</label>
              <input
                type="number"
                className="form-control"
                id="inputValorUnitario"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputVTotal">Valor total</label>
            <input
              type="number"
              className="form-control"
              id="inputVTotal"
              placeholder="{`$${}`}"
            />
          </div>
          <div className="form-group">
            <label>Descrpción del pedido</label>
            <textarea className="form-control"></textarea>
          </div>
          <button className="btn btn-danger" onClick={()=>{
            document.getElementById('ctz').style.visibility = 'hidden';
          }}>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Cotizador;
