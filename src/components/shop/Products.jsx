import React from "react";
import Link from "next/link";
import Image from "next/image";

const Products = ({ product: { previewImg, title, rating, price } }) => {
  return (
    <div className="col-xl-2 col-xxl-3 col-md-4 col-sm-6">
      <div className="card">
        <div className="card-body">
          <div className="new-arrival-product">
            <div className="new-arrivals-img-contnent">
              <Image className="img-fluid" src={previewImg} alt="" />
            </div>
            <div className="new-arrival-content text-center mt-3">
              <h4>
                <Link href="/ecom-product-detail">{title}</Link>
              </h4>
              {rating}
              <span className="price">${price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
