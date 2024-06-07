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
  applications?: [];
}

export interface IApplication {
  id: number;
  positivePercentage: number;
  success: number;
  failure: number;
  createdBy: string;
  createdAt: string;
  aborted: boolean;
  reasonAbortion: string;
}
