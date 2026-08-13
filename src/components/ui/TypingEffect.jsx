import { useEffect, useState } from "react";

function TypingEffect({ text, speed = 100 }) {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        setDisplayText("");
        let index = 0;

        const timer = setInterval(() => {
            setDisplayText(text.slice(0, index + 1));
            index++;

            if (index >= text.length) {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return (
        <>
            {displayText}
            <span className="animate-pulse">|</span>
        </>
    );
}

export default TypingEffect;