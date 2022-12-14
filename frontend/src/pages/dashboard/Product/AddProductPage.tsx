import React, { useCallback, useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import { MdAdd } from "react-icons/md";
import { Button, Container } from "@mantine/core";
import AddProductForm from "../../../components/AddProductForm/AddProductForm";
import AddCategoryModal from "../../../components/Modal/AddCategoryModal";

const AddProductPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleAdd = useCallback(
    () => setOpenModal((prev) => !prev),
    [setOpenModal]
  );
  return (
    <Container size="md">
      <PageHeader
        title="Add New Product"
        actions={
          <Button onClick={handleAdd} variant="light" leftIcon={<MdAdd />}>
            Add category
          </Button>
        }
      />
      <AddProductForm />
      <AddCategoryModal openModal={openModal} setOpenModal={setOpenModal} />
    </Container>
  );
};

export default AddProductPage;
