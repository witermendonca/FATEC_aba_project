import { IProtocolResponse } from './protocol.interface';
import { IResponsavel } from './responsavel.interface';

export interface ICliente {
  id?: number;
  name: string;
  birthday: string;
  gender: string;
  cpf: string;
  telephone: string;
  email: string;
  educationLevel?: string;
  medicalInformations?: string;
  medicinesInUse?: string;
  processingInformation?: string;
  address: Address;
  responsible?: IResponsavel[];
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
  protocols?: IProtocolResponse[];
}

export interface Address {
  cep: string;
  street: string;
  addressNumber: number;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}
