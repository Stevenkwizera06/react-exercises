import { useState } from "react"
import ReactMde from "react-mde"
import Showdown from "showdown"
import "react-mde/lib/styles/css/react-mde-all.css";

export default function Editor({ currentNote, updateNote }) {
    const [selectedTab, setSelectedTab] = useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })

    const generateMarkdownPreview = async (markdown) => {
        const html = await converter.makeHtml(markdown)
        return html
    }

    return (
        <section className="pane editor">
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={generateMarkdownPreview}
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}
