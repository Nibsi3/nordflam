import ClientPage from "./ClientPage";
import { products } from "@/data/products";
export function generateStaticParams(){return products.map(p=>({id:p.id}));}
export default function Page(){return <ClientPage/>;}
