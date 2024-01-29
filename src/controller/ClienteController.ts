import { Request, Response } from "express";

export default class ClienteController {
  public async findAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    return response.status(200).json("DEU CERTO PORRA!!");
  }
}
