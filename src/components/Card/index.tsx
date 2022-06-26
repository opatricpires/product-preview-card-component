import { CardProps } from "./types";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const Card = ({
  image,
  category,
  description,
  title,
  price,
  discount,
}: CardProps) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-1/3 md:w-1/2 md:h-full bg-center bg-cover bg-no-repeat"
      />
      <div className="w-full md:w-1/2 h-auto bg-neutral-white p-6">
        <p className="mb-2 text-neutral-dark-grayish-blue">{category}</p>
        <p className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
          {title}
        </p>
        <p className="text-neutral-dark-grayish-blue mb-6">{description}</p>
        <div className="flex items-center mb-6">
          <span className="text-4xl font-serif text-primary-dark-cyan mr-6">
            ${price}
          </span>
          {discount && (
            <span className="text-neutral-dark-grayish-blue line-through">
              ${discount}
            </span>
          )}
        </div>
        <button className="h-12 w-full bg-primary-dark-cyan text-neutral-white rounded-md flex items-center justify-center">
          <ShoppingCartIcon className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Card;
