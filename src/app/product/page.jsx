import Product from "./product";




export default function Home() {



  return (
    <div className="container mx-auto px-4 py-[6rem]">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>


      

        {/* Products Section */}
        <div className="products">
          <Product />
        </div>





      {/* </div> */}
    </div>
  );
}
