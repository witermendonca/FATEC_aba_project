import { IResponsavel } from './responsavel.interface';

export interface ICliente {
  id?: number;
  name: string;
  birthday: string;
  gender: string;
  cpf: string;
  telephone: string;
  email: string;
  education_level?: string;
  medical_informations?: string;
  medicines_in_use?: string;
  processing_information?: string;
  address: Address;
  responsible?: IResponsavel[];
  created_at?: string;
  updated_at?: string;
}

export interface Address{
  cep: string;
  street: string;
  address_number: number;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}