import { Request, Response } from "express";
import {
  CreateProductType,
  UpdateProductBodyType,
  UpdateProductParamsType,
  UpdateProductQueryType,
} from "../schemas/product.schema";

export const createProduct = (
  req: Request<unknown, unknown, CreateProductType>,
  res: Response
) => {
  // Extrae el nombre y el precio del cuerpo de la solicitud.
  const { name, price } = req.body;
  // Envía una respuesta indicando que se está creando el producto.
  res.send("Consulta: CREATE 'product'");
};

/*  Ejemplo de consulta: http://localhost:3000/products?name=ProductD&price=10.99 */

export const updateProduct = (
  req: Request<
    UpdateProductParamsType,
    unknown,
    UpdateProductBodyType,
    UpdateProductQueryType
  >,
  res: Response
) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const { title } = req.query;

  console.log(id, name, price, title);
  res.send("Consulta: UPDATE 'product'");
};

/* Ejemplo de consulta: http://localhost:3000/products/123?title=Ejemplo*/

export const deleteProduct = (
  req: Request<UpdateProductParamsType, unknown, unknown>,
  res: Response
) => {
  const { id } = req.params;

  console.log(id);
  res.send("Consulta: DELETE 'product'");
};

/* Ejemplo de consulta:  http://localhost:3000/products/123 */



export const getProduct = (
  req: Request<UpdateProductParamsType, unknown, unknown, UpdateProductQueryType>,
  res: Response
) => {
  const { id } = req.params;
  const { title } = req.query;

  console.log(id, title);
  res.send("Consulta: GET 'product'");
};

/* Ejemplo de consulta: http://localhost:3000/products/123 */