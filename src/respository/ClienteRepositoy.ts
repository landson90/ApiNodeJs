import { EntityRepository, Repository } from "typeorm";
import Cliente from "../model/Cliente";

@EntityRepository(Cliente)
export class ClienteRepository extends Repository<Cliente> {}
