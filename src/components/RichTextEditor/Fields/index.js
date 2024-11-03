import Image from "./Image";
import Bar from "./Bar";
import Link from "./Link";
import Text from "./Text";

export default Fields = ({ field, image, setContent }) => {
  const renderComponent = () => {
    switch (field) {
      case "link":
        return <Link setContent={setContent}></Link>;
      case "image":
        return <Image setContent={setContent} imgSrc={image}></Image>;
      case "bar":
        return <Bar fieldType={field} setContent={setContent}></Bar>;
      default:
        return <Text setContent={setContent}></Text>;
    }
  };
  return renderComponent();
};
