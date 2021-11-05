import { SaleDto } from "./sale";

export type salePageDto = {
  content?: SaleDto[],
  last: boolean,
  totalPages: number,
  totalElements: number,
  first: boolean,
  number: number,
  numberOfElements?: number,
  size?: number,
  empty?: boolean,
}