import dynamic from "next/dynamic";
// import ProductPage from "../../components/productPage";
const ProductPage = dynamic(()=>import('../../components/productPage'))

export const metadata = {
  title:'products',
  description :'products for NaderShop'
}
export default function Page() {

  return (
    <div className="container mx-auto px-4 py-[6rem]">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>

        {/* Products Section */}
        <div className="products">
          <ProductPage />
        </div>

      {/* </div> */}
    </div>
  );
}
