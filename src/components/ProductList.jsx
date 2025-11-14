import Card from "./cards/Card";

const ProductList = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 place-items-center gap-2 p-5 pb-26 max-w-5xl">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ProductList;
