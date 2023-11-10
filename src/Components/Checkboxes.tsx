export default function Checkboxes({id, value}) {
    return <>
        <input type="checkbox" id={id} name={value} value={value} />
        <label htmlFor={value}>{value}</label>
        <br />
    </>
}