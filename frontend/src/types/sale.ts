import { sellerDto } from "./seller";

export type SaleDto = {
  id: number,
  visited: number,
  deals: number,
  amount: number,
  date: string,
  seller: sellerDto,
}