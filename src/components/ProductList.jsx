import Card from "./cards/Card";

const ProductList = ({ category, search }) => (
  <div className="grid grid-cols-3 gap-2">
    <Card category={category} search={search} />
  </div>
);

export default ProductList;
