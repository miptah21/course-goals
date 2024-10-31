import { type ReactNode } from "react";

type HintInfoBoxProps = {
    mode: "hint";
    children: ReactNode;
}

type WarningInfoBoxProps = {
    mode: "warning";
    severity: "low" | "medium" | "high";
    children: ReactNode;
}

type InfoBoxProps = HintInfoBoxProps | WarningInfoBoxProps;

export default function InfoBox(props: InfoBoxProps) {
    const { mode, children } = props;
    const { severity } = props as WarningInfoBoxProps;
    
    if (mode === "hint") {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        )
    }

    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}