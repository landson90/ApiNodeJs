import { getCustomRepository } from "typeorm";
import Cliente from "../model/Cliente";
import { ClienteRepository } from "../respository/ClienteRepositoy";

class ClienteService {
  public async save({ name }: Cliente): Promise<Cliente | null> {
    const clienteRepository = getCustomRepository(
      ClienteRepository
    ) as ClienteRepository;
    var cliente = new Cliente();
    cliente.name = name;

    const cli = await clienteRepository.save(cliente);
    return cli;
  }
}

export default ClienteService;
