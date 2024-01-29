import { DataSource } from "typeorm";
import Cliente from "../model/Cliente";
import { CreateClienteTable1706571042020 } from "./migrations/1706571042020-CreateClienteTable";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Cliente],
  subscribers: [CreateClienteTable1706571042020],
  migrations: [],
});
