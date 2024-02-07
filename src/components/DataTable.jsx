import React, { useState } from 'react';
import { IoIosClose } from "react-icons/io";

const DataTable = ({ csvData }) => {
    const [selectedTags, setSelectedTags] = useState([]);


    // Check if csvData is empty or null
    if (!csvData || csvData.length === 0) {
        return <div className='text-center text-2xl font-bold mb-10'> No Data Available. Please upload</div>;
    }

    const headers = Object.keys(csvData[0]);



    return (
        <div className='w-full overflow-x-auto'>
            <h1>Uploads</h1>
            <table className='bg-[#F5F5F5] md:w-auto w-screen border-separate border-spacing-y-5 md:px-12 px-4 rounded-lg  '>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header === "select tags" ? "Add Tags" : header === "selected tags" ? "Selected Tags" : header === "id" ? "SI No." : header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {csvData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map((header, columnIndex) => (
                                <td key={columnIndex}>
                                    {header === "select tags" ? (
                                        <select className='w-48 rounded-md p-2 border-gray-500' onChange={(e) => setSelectedTags((prev) => [...prev, e.target.value])}>
                                            <option >Select tags</option>
                                            {row[header].split(",").map((tag, idx) => (
                                                <option key={idx} >{tag}</option>
                                            ))}
                                        </select>
                                    ) : header === "selected tags" ? (
                                        <div className='flex flex-wrap'>
                                            {selectedTags && selectedTags.map((tag, index) => (
                                                <div className="flex w-fit m-2 bg-blue-600 p-2 rounded-xl gap-2" key={index}>
                                                    <p>{tag}</p>
                                                    <button onClick={() => handleRemoveTag(index, rowIndex)}><IoIosClose /></button>
                                                </div>
                                            ))}
                                        </div>
                                    ) : row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default DataTable;
