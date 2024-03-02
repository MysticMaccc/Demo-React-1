function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
    // const ButtonsContainer = buttonsContainer; ifreceiving props as html element, set the props to PascalCase
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}

export default Tabs;