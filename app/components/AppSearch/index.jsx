"use client";
import React, { useEffect, useState } from "react";
import AppTab from "./AppTab";
import AppSelector from "./AppSelector";
import AppPriceInput from "./AppPriceInput";
import { AppBikeIcon, AppCarIcon, AppTruckIcon } from "../AppIcons";
import { fetchAllCats, fetchAllMans } from "@/utils";
import AppFilterSelector from "../AppFilterSelector";

const AppSearch = ({ setSearcher, total }) => {
  const [currentBuy, setCurrentBuy] = useState(null);
  const [currentDealers, setCurrentDealers] = useState(null);
  const [currentCategories, setCurrentCategories] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [usdCurrency, setUsdCurrency] = useState(null);
  const [mans, setMans] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchMans = async () => {
      try {
        const data = await fetchAllMans();
        setMans(data);
      } catch (error) {
        console.error("Error fetching mans:", error);
      }
    };

    const fetchCats = async () => {
      try {
        const data = await fetchAllCats();
        setCats(data.data);
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    fetchMans();
    fetchCats();
  }, []);

  const TABS = [
    {
      icon: <AppCarIcon isActive={true} />,
    },
    {
      icon: <AppTruckIcon isActive={false} />,
    },
    {
      icon: <AppBikeIcon isActive={false} />,
    },
  ];

  let buyOptions = [
    { id: 0, title: "იყიდება" },
    { id: 1, title: "ქირავდება" },
  ];

  const handleCurrencyToggle = () => {
    setUsdCurrency(!usdCurrency);
  };

  const createSelectionChangeHandler = (setStateFunc) => (selectedItems) => {
    setStateFunc(selectedItems);
  };

  const constructSearcherString = () => {
    let searchString = "";
    if (currentBuy !== null) {
      searchString += `&ForRent=${currentBuy.id}`;
    }
    if (minPrice !== "" || null || undefined) {
      searchString += `&PriceFrom=${minPrice}`;
    }
    if (maxPrice !== "" || null || undefined) {
      searchString += `&PriceTo=${maxPrice}`;
    }
    if (currentDealers !== null && currentDealers.length > 0) {
      const dealerIds = currentDealers.map((dealer) => dealer.man_id).join("-");
      searchString += `&Mans=${dealerIds}`;
    }
    if (currentCategories !== null && currentCategories.length > 0) {
      const categoryIds = currentCategories
        .map((cat) => cat.category_id)
        .join(".");
      searchString += `&Cats=${categoryIds}`;
    }
    return searchString;
  };

  const handleSearch = () => {
    const searchString = constructSearcherString();
    setSearcher(searchString);
  };

  return (
    <div className="relative mt-8 max-w-none h-fit overflow-hidden rounded-tl-lg border-gray bg-white md:max-w-[250px] md:mt-0">
      <AppTab tabOptions={TABS} />
      <div className=" p-6 border-b border-b-gray">
        <div className="mb-5">
          <span className="mb-2 block font-sailec text-sm font-medium leading-12 text-left">
            გარიგების ტიპი
          </span>

          <AppFilterSelector
            options={buyOptions}
            placeholder="იყიდება"
            fullwidth
            onSelectionChange={createSelectionChangeHandler(setCurrentBuy)}
          />
        </div>

        <div className="mb-5">
          <span className="mb-2 block font-sailec text-sm font-medium leading-12 text-left">
            მწარმოებელი
          </span>
          <AppSelector
            options={mans}
            placeholder="ყველა მწარმოებელი"
            titleKey="man_name"
            idKey="man_id"
            onSelectionChange={createSelectionChangeHandler(setCurrentDealers)}
          />
        </div>

        <div>
          <span className="mb-2 block font-sailec text-sm font-medium leading-12 text-left">
            კატეგორია
          </span>
          <AppSelector
            options={cats}
            placeholder="ყველა კატეგორია"
            titleKey="title"
            idKey="category_id"
            onSelectionChange={createSelectionChangeHandler(
              setCurrentCategories
            )}
          />
        </div>
      </div>

      <AppPriceInput
        maxPrice={maxPrice}
        minPrice={minPrice}
        usd={usdCurrency}
        onMinPriceChange={(e) => setMinPrice(e.target.value)}
        onMaxPriceChange={(e) => setMaxPrice(e.target.value)}
        onCurrencyToggle={handleCurrencyToggle}
        usdCurrency={usdCurrency}
      />
      <div className="px-6 pt-4 pb-5 shadow-custom">
        <button
          className="font-sailec w-full text-white text-center text-lg font-bold py-2 px-4 rounded bg-[#FD4100] hover:bg-[#fd6e00] focus:outline-none"
          onClick={handleSearch}
        >
          ძიება {total}
        </button>
      </div>
    </div>
  );
};

export default AppSearch;
