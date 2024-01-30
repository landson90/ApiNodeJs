import { Request, Response } from "express";
import ClienteService from "../service/ClienteService";

export default class ClienteController {
  public async findAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { nome } = request.body;
    const service = new ClienteService();
    const cliente = await service.save(nome);
    return response.status(200).json(cliente);
  }
}
