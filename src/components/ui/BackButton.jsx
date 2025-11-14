import Link from "next/link";

const BackButton = () => {
  return (
    <>
      <Link href="/products">
        <button className="px-6 py-2 rounded-2xl mb-8 cursor-pointer">
          back
        </button>
      </Link>
    </>
  );
};

export default BackButton;
