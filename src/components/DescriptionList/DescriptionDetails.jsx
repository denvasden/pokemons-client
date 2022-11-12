import "./description-list.scss";

function DescriptionDetails(props) {
  const {children} = props;

  return (
    <dd className="description-details">
      {children}
    </dd>
  );
}

export default DescriptionDetails;
