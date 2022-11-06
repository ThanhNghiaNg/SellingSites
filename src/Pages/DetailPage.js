import DetailProduct from "../component/DetailProduct/DetailProduct";
import { useParams } from "react-router-dom";

const DetailPage = (props) => {
  const params = useParams(); // get params from url

  return (
    <div>
      {/* passing params ID to DetailProduct */}
      <DetailProduct id={params.id} />
    </div>
  );
};

export default DetailPage;
