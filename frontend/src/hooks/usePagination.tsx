import React, { useState } from "react";
import { useAppSelector } from "../store/hooks";
import { selectProductsId } from "../store/slices/productSlice";
import { selectCategoryIds } from "../store/slices/categoryslice";
import { RootState } from "../store/store";

const idsByEntity = {
  product: selectProductsId,
  category: selectCategoryIds,
};

interface Props {
  entity: keyof RootState;
  itemsPerPage: number;
}

const UsePagination = ({ entity, itemsPerPage }: Props) => {
  const [currentPage, setcurrentPage] = useState(1);
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  const ids = useAppSelector(idsByEntity[entity]);

  const itemsToShow = ids.slice(startIndex, endIndex) as string[];

  const totalItems = ids.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChangePage = (pageNumber: number) => {
    setcurrentPage(pageNumber);
  };

  return { totalPages, currentPage, handleChangePage, itemsToShow };
};

export default UsePagination;
