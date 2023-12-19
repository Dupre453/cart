import Cross from '../../assets/img/icons/cross.svg'

const ButtonDelete = ({deleteProduct, id}) => {
    return (
        <button type="button" onClick={() => {deleteProduct(id)}}>
            <img src={Cross} alt="Delete"/>
        </button>
    )
}
export default ButtonDelete