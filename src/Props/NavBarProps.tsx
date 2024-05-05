import { ReactNode } from "react";
export type NavBarProps = {
    activeSection: string;
    onSectionClick: (sectionId: string) => void,
    children:ReactNode,
}
