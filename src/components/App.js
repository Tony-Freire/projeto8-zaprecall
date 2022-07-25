import { useState } from "react";
import PageMain from "./pageMain/PageMain";
import FlashcardPage from "./flashcardPage/FlashcardPage";

export default function App() {

    const [visible, setVisible]=useState(true);

    return (
        <>
        {visible?<PageMain setVisible={setVisible}/>:<FlashcardPage/>}
        </>
    )
}