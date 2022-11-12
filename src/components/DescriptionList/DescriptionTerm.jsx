import "./description-list.scss";

function DescriptionTerm(props) {
  const {children} = props;

  return (
    <dd className="description-term">
      {children}
    </dd>
  );
}

export default DescriptionTerm;
