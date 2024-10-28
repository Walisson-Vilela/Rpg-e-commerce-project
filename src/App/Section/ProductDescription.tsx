interface IProps {
  description: string;
}

const ProductDescription = ({ description }: IProps) => {
  return (
    <section className="col-span-3 relative h-32 border-4 border-white rounded-md items-center p-5 bg-gradient-to-t from-blue-950/60 to-blue-300/40 shadow-md">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard{description}
    </section>
  );
};

export default ProductDescription;
