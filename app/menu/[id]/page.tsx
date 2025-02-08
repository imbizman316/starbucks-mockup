"use client";

import FullTwoDividedCard from "@/app/components/michelaneous/FullTwoDividedCard";
import CoffeeDescription from "@/app/components/pages/menu/coffee_id/CoffeeDescription";
import ProductTop from "@/app/components/pages/menu/coffee_id/ProductTop";
import SizeOptions from "@/app/components/pages/menu/coffee_id/SizeOptions";
import { useCoffeeStore } from "@/app/store/coffeeStore";
import { Coffee } from "@/app/types/menus/types";
import { Box, CircularProgress } from "@mui/material";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductDetail = () => {
  const pathname = usePathname();
  const id = pathname ? pathname.split("/").filter(Boolean).pop() : "";

  const [coffeeDetail, setCoffeeDetail] = useState<Coffee>({
    id: "",
    created_at: "",
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  });
  const { coffees, fetchCoffees } = useCoffeeStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchSequence() {
      setIsLoading(true);

      if (coffees.length === 0 || coffees === null || coffees === undefined) {
        await fetchCoffees();
      }

      const coffeeFound = coffees.find((coffee) => coffee.id === id);

      setCoffeeDetail(
        coffeeFound || {
          id: "",
          created_at: "",
          name: "",
          description: "",
          price: 0,
          image: "",
          category: "",
        }
      );

      setIsLoading(false);
    }

    fetchSequence();
  }, [coffees, fetchCoffees, id]);

  return (
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box>
          <ProductTop
            name={coffeeDetail?.name}
            price={coffeeDetail?.price}
            category={coffeeDetail?.category}
            image={coffeeDetail?.image}
          />
          <FullTwoDividedCard
            color={"#ffffff"}
            left={<SizeOptions />}
            right=<SizeOptions />
          />
          <CoffeeDescription description={coffeeDetail.description} />
        </Box>
      )}
    </Box>
  );
};

export default ProductDetail;
