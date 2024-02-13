import styled from "styled-components";
import AddingCategoryTab from "../Components/AddingCategoryTab";
import AddProductForm from "../Components/AddProductForm";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  height: 2.5rem;
  width: 15rem;
  margin: 0 auto;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3; // Darken the button color on hover
  }
`;

const AddProductContainer = styled.div`
  width: 50rem;
  margin: 0 auto;
`;

function AddProduct() {
  const [isCatAdd, setIsCatAdd] = useState(false);
  const [wantToAddCat, setWantToAddCadd] = useState(false);
  return (
    <div>
      <Container>
        <AddProductContainer>
          <AddProductForm isCatAdd={isCatAdd} />
        </AddProductContainer>
        <Button onClick={() => setWantToAddCadd(!wantToAddCat)}>
          {wantToAddCat ? "Close The Tab" : "Manage Category"}
        </Button>
        {wantToAddCat && (
          <AddingCategoryTab isCatAdd={isCatAdd} setIsCatAdd={setIsCatAdd} />
        )}
      </Container>
    </div>
  );
}

export default AddProduct;
