import Button from 'react-bootstrap/Button'

const Btn = ({ paddingRight, marginLeft, variant, label, onClick}) => {

return (
    <Button onClick={onClick} style={{variant, marginLeft, paddingRight}}>{label}</Button>
)
}

export default Btn