export const User = ({name, surname, companyName, phone}) => {
const noOfChart = phone.indexOf('-');
if (noOfChart > 0) {
    const codePhone = '(' + phone.slice(0, noOfChart) + ')' + phone.slice(noOfChart)
    return <li>{name} {surname} works in {companyName}. Phone: {codePhone}</li>
}
return (
    <li>{name} {surname} works in {companyName}. Phone: {phone}</li>
)
}