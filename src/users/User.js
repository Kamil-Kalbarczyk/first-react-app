import { Link } from "react-router-dom";

export const User = ({ id, name, surname, companyName, phone }) => {
  const noOfChart = phone.indexOf("-");
  if (noOfChart > 0) {
    const codePhone =
      "(" + phone.slice(0, noOfChart) + ")" + phone.slice(noOfChart);
    console.log(id);
    return (
      <li>
        <Link to={`/users/${id}`}>
          {name} {surname}{" "}
        </Link>
        works in {companyName}. Phone: {codePhone}
      </li>
    );
  }
  return (
    <li>
      <Link to={`/users/${id}`}>
        {name} {surname}{" "}
      </Link>
      works in {companyName}. Phone: {phone}
    </li>
  );
};
