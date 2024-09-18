import { IApplication } from "./aplicacao.interface";

export interface IProtocol {
  name: string;
  createdBy: string;
  idClient: number;
}

export interface IProtocolResponse {
  id: number;
  name: string;
  createdAt: string;
  createdBy: string;
  clientId: number;
  applications?: IApplication[];
}


