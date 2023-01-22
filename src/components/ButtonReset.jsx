export const ButtonReset = ({updateButton, enable}) => {

    const text = enable ? 'Desactivar Puntero' : 'Activar Puntero'

    const handleClick = () => {
        updateButton()
    }

    return (
        <button className="btn" onClick={handleClick}>
            {text}
        </button>
    )
}