function TabButton({ children , onSelect, isSelected }) {
    //props.children is a special prop that works like $slot in laravel
    // children - destructured
    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    )
}

export default TabButton;