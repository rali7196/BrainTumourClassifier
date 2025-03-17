import React from "react"

import {render} from "@testing-library/react"
import NavBar, { Tab } from "./NavBar"

describe("Navigation bar tests", () => {

    const tabs: Tab[] = [
        {
            name: "newPage",
            link: "new-page"
        }
    ]

    test("component compiles without issues", () => {
        render(<NavBar tabs={tabs}/>)
    })
})