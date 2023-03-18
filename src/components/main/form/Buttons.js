const Buttons =({value, className, handleClick, updateAvatar})=>{
    return(
        <button 
        className={className}
        onClick={handleClick}
        updateavatar={updateAvatar}
        >
            {value}
        </button>
    );
}

export default Buttons;