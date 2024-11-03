import Image from "./Image";
import Bar from "./Bar";
import Link from "./Link";
import Text from "./Text";

export default Fields = ({ field, image }) => {
  const renderComponent = () => {
    switch (field) {
      case "link":
        return <Link></Link>;
      case "image":
        return <Image imgSrc={image}></Image>;
      case "bar":
        return <Bar></Bar>;
      default:
        return <Text></Text>;
    }
  };
  return renderComponent();
};
