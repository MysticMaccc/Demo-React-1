import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    function handleSelect(selectedButton) {
        //selectedButton can be component, jsx, props, state
        setSelectedTopic(selectedButton)
    }

    let tabContent = <p>Please select a topic!</p>
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        )
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs
                // ButtonsContainer="menu" - can be declared as prop or not bcause it already have a default value in Tabs component
                buttons={<>
                    <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Component</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                </>}>

                {tabContent}
            </Tabs>
        </Section>
    );
}

export default Examples;