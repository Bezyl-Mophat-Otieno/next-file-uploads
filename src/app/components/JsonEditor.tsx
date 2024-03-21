
import React, { useState } from "react";
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { Button } from "primereact/button";
import ExcelJS from 'exceljs';
import test from "node:test";

export default function JsonEditor() {
    const exportToExcel = async (filename:string ) => {
        console.log('Exporting to Excel...');

        const jsonDataString = `[
            {
                "OccupancyID": 12681,
                "CommunityFacilityID": null,
                "VersionID": 4367,
                "HomeTypeCategory": "GrandTotals",
                "Total": 810,
                "Availability": 61,
                "PercentageAvailability": 7.53,
                "DateTimeCreated": "2024-03-13T13:50:50.51"
            },
            {
                "OccupancyID": 12668,
                "CommunityFacilityID": 1,
                "VersionID": 4367,
                "HomeTypeCategory": "Studio",
                "Total": 1,
                "Availability": null,
                "PercentageAvailability": null,
                "DateTimeCreated": "2024-03-13T13:50:10.64"
            },
            {
                "OccupancyID": 12669,
                "CommunityFacilityID": 1,
                "VersionID": 4367,
                "HomeTypeCategory": "1BR",
                "Total": 20,
                "Availability": null,
                "PercentageAvailability": null,
                "DateTimeCreated": "2024-03-13T13:50:10.64"
            },
            {
                "OccupancyID": 12670,
                "CommunityFacilityID": 1,
                "VersionID": 4367,
                "HomeTypeCategory": "2BR",
                "Total": 10,
                "Availability": 4,
                "PercentageAvailability": 40.00,
                "DateTimeCreated": "2024-03-13T13:50:10.64"
            },
            {
                "OccupancyID": 12671,
                "CommunityFacilityID": 1,
                "VersionID": 4367,
                "HomeTypeCategory": "Total",
                "Total": 719,
                "Availability": 34,
                "PercentageAvailability": 4.73,
                "DateTimeCreated": "2024-03-13T13:50:10.64"
            },
            {
                "OccupancyID": 12685,
                "CommunityFacilityID": 1,
                "VersionID": 4367,
                "HomeTypeCategory": "Cottage",
                "Total": 23,
                "Availability": 10,
                "PercentageAvailability": 43.48,
                "DateTimeCreated": "2024-03-13T15:02:15.21"
            },
            {
                "OccupancyID": 12756,
                "CommunityFacilityID": 1,
                "VersionID": 4367,
                "HomeTypeCategory": "Semi-private",
                "Total": 23,
                "Availability": 20,
                "PercentageAvailability": 86.96,
                "DateTimeCreated": "2024-03-19T06:22:48.38"
            },
            {
                "OccupancyID": 12673,
                "CommunityFacilityID": 2,
                "VersionID": 4367,
                "HomeTypeCategory": "Studio",
                "Total": 4,
                "Availability": null,
                "PercentageAvailability": null,
                "DateTimeCreated": "2024-03-13T13:50:10.64"
            },
            {
                "OccupancyID": 12674,
                "CommunityFacilityID": 2,
                "VersionID": 4367,
                "HomeTypeCategory": "1BR",
                "Total": 2,
                "Availability": null,
                "PercentageAvailability": null,
                "DateTimeCreated": "2024-03-13T13:50:10.64"
            }
        ]`;
        try {
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Sheet1',{properties:{tabColor:{argb:'FFC0000'},defaultColWidth: 20}});
            const jsonData = JSON.parse(jsonDataString); // Parse jsonDataString into an array
            const columnTitles = Object.keys(jsonData[0]); // Get the keys of the first object in the array  
            worksheet.addRow(columnTitles); // Add the titles as the first row

            for (const data of jsonData) {
                worksheet.addRow(Object.values(data)); // Add the values as the next rows
            }
            const buffer = await workbook.xlsx.writeBuffer();
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${filename}.xlsx`;
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error exporting to Excel:', error);
        }
    };
    const [text, setText] = useState<string>('');

    const handleInputChange = (e: EditorTextChangeEvent) => {
        setText(e.textValue);
    }
    

    return (
        <div className=" mt-5 card border-none">
            <Editor value={text} onTextChange={(e: EditorTextChangeEvent) => handleInputChange(e)} style={{ height: '320px' }} />
            <Button className='m-5' severity='info' onClick={()=>exportToExcel("myfile")}> Download </Button>

        </div>
    )
}
        