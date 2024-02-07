import React, { useRef, useState, useEffect } from 'react';
import bell from "../assets/bell.svg";
import profile from "../assets/profile.svg";
import upload from "../assets/upload.svg";
import excelIcon from "../assets/excel-icon.svg";
import ClipLoader from "react-spinners/ClipLoader";
import DataTable from './DataTable';
import * as Papa from 'papaparse';


const DashboardMain = () => {
    const inpRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [loader, setLoader] = useState(false);
    const [csvData, setCsvData] = useState([]);


    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setSelectedFile(e.dataTransfer.files[0]);
    };

    const handleRemove = () => {
        setSelectedFile(null);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'text/csv') {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
            alert("Please select a valid CSV file.");
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            setLoader(true);
            setTimeout(() => {
                Papa.parse(selectedFile, {
                    complete: (result) => {
                        setCsvData(result.data);
                    },
                    header: true
                });
                setLoader(false);
            }, 2000);
        }
    };

    return (
        <div className='md:w-5/6 w-full h-full'>
            <div className='h-screen mb-24 '>
                <header className='flex justify-between p-6 md:ml-0 ml-14 '>
                    <h1 className='font-bold'>Upload CSV</h1>
                    <div className='flex gap-8'>
                        <img src={bell} className='w-6' alt="Bell Icon" />
                        <img src={profile} className='w-8' alt="Profile Icon" />
                    </div>
                </header>
                <main className=' h-full flex justify-center items-center'>
                    <div className='w-[596px] p-4' onDragOver={handleDragOver} onDrop={handleDrop}>
                        {!selectedFile ? (
                            <div className='mb-10 flex flex-col items-center justify-center border border-dashed border-gray-400 h-[400px]'>
                                <img src={excelIcon} alt="Excel Icon" className="w-20 h-20 mb-2" />
                                <input type='file' onChange={handleFileChange} accept=".csv" ref={inpRef} hidden />
                                <p className="text-[#999CA0] text-xl">Drop your excel sheet here or <span className="text-[#605BFF] cursor-pointer" onClick={() => inpRef.current.click()}>browse</span></p>
                            </div>
                        ) : (
                            <div className='mb-10 flex flex-col items-center justify-center gap-4'>
                                <img src={excelIcon} alt="Excel Icon" className="w-20 h-20 mb-2" />
                                <p className="w-52 text-center text-[#999CA0]">{selectedFile.name}</p>
                                <p className='text-red-600 font-medium cursor-pointer' onClick={handleRemove}>Remove</p>
                            </div>
                        )}
                        <div onClick={handleUpload}>
                            {!loader ? (
                                <button className='bg-[#605BFF] w-full flex gap-4 justify-center items-center text-xl font-bold text-white p-4 rounded-lg'>
                                    <img src={upload} alt="Upload Icon" /> Upload
                                </button>
                            ) : (
                                <button className='bg-[#605BFF] w-full flex gap-4 justify-center items-center text-xl font-bold text-white p-4 rounded-lg'>
                                    <ClipLoader color={"white"} loading={loader} size={30} aria-label="Loading Spinner" />
                                </button>
                            )}
                        </div>
                    </div>
                </main>
            </div>
            <div>
                <DataTable csvData={csvData} />
            </div>
        </div>
    );
};

export default DashboardMain;
