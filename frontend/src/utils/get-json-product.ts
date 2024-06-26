import { toJsonForEl } from "./to-json-for-el";

export function getJsonProduct<TData = Product>() {
  const el = document.getElementById("warpdriven-recs-json-product");
  if (!el) {
    console.error("No element warpdriven-recs-json-product");
    return null;
  }

  return toJsonForEl<TData>(el);
}

export interface Product {
  id: number;
  title: string;
  price: string;
  url: string;
  variations: number[];
}
