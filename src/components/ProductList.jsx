import Card from "./cards/Card";

const ProductList = ({ category }) => {
  return (
    <div className="grid grid-cols-3 gap-2 ">
      <Card category={category} />
    </div>
  );
};

export default ProductList;
