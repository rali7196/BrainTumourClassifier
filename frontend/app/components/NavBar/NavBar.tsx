import React, { JSX } from "react";
import Link from "next/link";

import styles from './NavBar.module.css'

export type Tab = {
    name: string;
    link: string;
};  

type NavBarProps = {
    tabs: Tab[];
};

const NavBar = ({ tabs }: NavBarProps): JSX.Element => {
    function renderTabs() {
        return (
            <>
                {tabs.map((value: Tab, index: number) => (
                    <p key={index} className={styles['navBarButton']}>
                        <Link href={value.link} className={styles['linkDecoration']}>{value.name}</Link>
                    </p>
                ))}
            </>
        );
    }
    return <div className={styles["navBarContainer"]}>{renderTabs()}</div>;
};

export default NavBar;
