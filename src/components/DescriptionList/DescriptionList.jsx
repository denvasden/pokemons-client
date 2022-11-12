import clsx from "clsx";

import "./description-list.scss";

function DescriptionList(props) {
  const {children, className: classNameProp, orientation = "landscape"} = props;

  const className = clsx("description-list", `description-list_${orientation}`, classNameProp);

  return (
    <dl className={className}>
      {children}
    </dl>
  );
}

export default DescriptionList;
