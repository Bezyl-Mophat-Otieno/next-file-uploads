"use client"
import FileUploadUI from "./components/FileUpload"
import JsonEditor from "./components/JsonEditor"
function page() {
  return (
    <div>
        <div className="card">
            <FileUploadUI />
        </div>
    </div>
  )
}

export default page