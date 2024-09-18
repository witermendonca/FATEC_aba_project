export interface IApplicationRequest {

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