import React, { JSX } from "react";
import Link from "next/link";

import styles from './NavBar.module.css'

type NavBarProps = {
    tabs: string[];
};

const NavBar = ({ tabs }: NavBarProps): JSX.Element => {
    function renderTabs() {
        return (
            <>
                {tabs.map((value: string, index: number) => (
                    <p key={index} className={styles['navBarButton']}>
                        <Link href="" className={styles['linkDecoration']}>{value}</Link>
                    </p>
                ))}
            </>
        );
    }
    return <div className={styles["navBarContainer"]}>{renderTabs()}</div>;
};

export default NavBar;
