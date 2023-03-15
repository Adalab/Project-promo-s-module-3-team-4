const Buttons =({value, className, handleClick, disabled})=>{
    return(
        <button 
        className={className}
        onClick={handleClick}
        disabled={disabled===false}
        >
            {value}
        </button>
    );
}

export default Buttons;