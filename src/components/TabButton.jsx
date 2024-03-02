function TabButton({ children , isSelected,...props }) {
    //props.children is a special prop that works like $slot in laravel
    // children - destructured
    return (
        <li>
            <button className={isSelected ? 'active' : ''} {...props}>{children}</button>
        </li>
    )
}

export default TabButton;