import { useParams } from "react-router-dom";
import Services_Data from '../../services_data';

const WebDev = () => {
  const { id } = useParams();
  const service = Services_Data.find(s => s.s_no === id);

  if (!service) return <div>Service not found</div>;

  return (
    <div className="service-detail">
      <h1>{service.s_name}</h1>
      <p>{service.s_desc}</p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure similique assumenda voluptatibus, fuga sit minus. Nam laudantium voluptatem animi sed. Reiciendis, corrupti amet! Quia sequi ipsa modi eveniet ducimus omnis!
        </p>
    </div>
  );
};

export default WebDev;