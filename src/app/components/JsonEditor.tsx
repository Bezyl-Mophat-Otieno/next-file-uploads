
import React, { useState } from "react";
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { Button } from "primereact/button";

export default function JsonEditor() {
    const [text, setText] = useState<string>('');

    return (
        <div className=" mt-5 card border-500 surface-overlay border-3 border-round">
            <Editor value={text} onTextChange={(e: EditorTextChangeEvent) => setText(e.htmlValue as string)} style={{ height: '320px' }} />
            <Button className='m-5' severity='info'> Download </Button>

        </div>
    )
}
        