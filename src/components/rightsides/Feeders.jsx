import TableContent from "../TableContent"
import TableHeader from "../TableHeader"


const Feeders = () => {
  return (
    <div
        className={`flex flex-col px-[12px]`}>
        {/* BTNS */}
        <div
            className={`flex flex-row items-center mt-[18px]`}>
            {/* Play */}
            <svg
                className="mr-2 cursor-pointer"
                width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0568 7.01474C16.417 7.20629 16.7183 7.49225 16.9284 7.84197C17.1385 8.1917 17.2495 8.592 17.2495 8.99998C17.2495 9.40797 17.1385 9.80827 16.9284 10.158C16.7183 10.5077 16.417 10.7937 16.0568 10.9852L6.44775 16.2105C4.9005 17.0527 3 15.9577 3 14.226V3.77474C3 2.04224 4.9005 0.947986 6.44775 1.78874L16.0568 7.01474Z" fill="black"/>
            </svg>
            {/* Next */}
            <svg
                className="mr-2 cursor-pointer"
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.538 4.113C2.70024 4.02861 2.88252 3.99033 3.06501 4.00232C3.24749 4.01431 3.42319 4.07611 3.573 4.181L13.573 11.181C13.7046 11.2732 13.8121 11.3958 13.8863 11.5384C13.9605 11.6809 13.9992 11.8393 13.9992 12C13.9992 12.1607 13.9605 12.3191 13.8863 12.4616C13.8121 12.6042 13.7046 12.7268 13.573 12.819L3.573 19.819C3.42316 19.9238 3.24746 19.9854 3.06502 19.9973C2.88257 20.0092 2.70035 19.9709 2.53819 19.8864C2.37602 19.802 2.2401 19.6747 2.14521 19.5184C2.05033 19.3621 2.0001 19.1828 2 19V5C1.99998 4.81709 2.05012 4.63767 2.14498 4.48128C2.23984 4.32489 2.37578 4.19751 2.538 4.113ZM16 5.8C16 5.32261 16.1896 4.86477 16.5272 4.52721C16.8648 4.18964 17.3226 4 17.8 4H19.2C19.4364 4 19.6704 4.04656 19.8888 4.13702C20.1072 4.22748 20.3056 4.36006 20.4728 4.52721C20.6399 4.69435 20.7725 4.89278 20.863 5.11117C20.9534 5.32956 21 5.56362 21 5.8V18.2C21 18.4364 20.9534 18.6704 20.863 18.8888C20.7725 19.1072 20.6399 19.3056 20.4728 19.4728C20.3056 19.6399 20.1072 19.7725 19.8888 19.863C19.6704 19.9534 19.4364 20 19.2 20H17.8C17.3226 20 16.8648 19.8104 16.5272 19.4728C16.1896 19.1352 16 18.6774 16 18.2V5.8Z" fill="black"/>
            </svg>
            {/* Stop */}
            <svg
                className="mr-2 cursor-pointer"
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 7H17V17H7V7Z" fill="black"/>
            </svg>
            {/* H Line */}
            <svg
                className="mr-2 cursor-pointer"
                width="1" height="25" viewBox="0 0 1 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" x2="0.5" y2="25" stroke="black"/>
            </svg>
            {/* Plus */}
            <svg
                className="mr-2 cursor-pointer"
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 12.998H13V17.998C13 18.2632 12.8946 18.5176 12.7071 18.7051C12.5196 18.8926 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8926 11.2929 18.7051C11.1054 18.5176 11 18.2632 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8926 5.29289 12.7051C5.10536 12.5176 5 12.2632 5 11.998C5 11.7328 5.10536 11.4784 5.29289 11.2909C5.48043 11.1033 5.73478 10.998 6 10.998H11V5.99799C11 5.73277 11.1054 5.47842 11.2929 5.29088C11.4804 5.10334 11.7348 4.99799 12 4.99799C12.2652 4.99799 12.5196 5.10334 12.7071 5.29088C12.8946 5.47842 13 5.73277 13 5.99799V10.998H18C18.2652 10.998 18.5196 11.1033 18.7071 11.2909C18.8946 11.4784 19 11.7328 19 11.998C19 12.2632 18.8946 12.5176 18.7071 12.7051C18.5196 12.8926 18.2652 12.998 18 12.998Z" fill="#03C42C"/>
            </svg>
            {/* Cancel */}
            <svg
                className="mr-2 cursor-pointer"
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.2176 17.8188C16.9475 18.0888 16.5813 18.2405 16.1994 18.2405C15.8175 18.2405 15.4512 18.0888 15.1812 17.8188L12 14.1828L8.81877 17.8176C8.68545 17.9531 8.52663 18.0609 8.35145 18.1347C8.17628 18.2085 7.98823 18.2469 7.79814 18.2477C7.60805 18.2485 7.41969 18.2116 7.24392 18.1392C7.06815 18.0668 6.90845 17.9604 6.77404 17.8259C6.63963 17.6915 6.53316 17.5318 6.46077 17.3561C6.38838 17.1803 6.35151 16.9919 6.35229 16.8018C6.35306 16.6118 6.39146 16.4237 6.46528 16.2485C6.53909 16.0734 6.64686 15.9145 6.78237 15.7812L10.092 12.0012L6.78117 8.21881C6.64566 8.0855 6.53789 7.92667 6.46408 7.7515C6.39026 7.57633 6.35186 7.38827 6.35109 7.19818C6.35031 7.00809 6.38718 6.81973 6.45957 6.64397C6.53196 6.4682 6.63843 6.3085 6.77284 6.17409C6.90725 6.03967 7.06695 5.9332 7.24272 5.86081C7.41849 5.78843 7.60685 5.75156 7.79694 5.75233C7.98703 5.75311 8.17508 5.79151 8.35025 5.86532C8.52543 5.93914 8.68425 6.04691 8.81757 6.18241L12 9.81961L15.1812 6.18241C15.3145 6.04691 15.4733 5.93914 15.6485 5.86532C15.8237 5.79151 16.0117 5.75311 16.2018 5.75233C16.3919 5.75156 16.5802 5.78843 16.756 5.86081C16.9318 5.9332 17.0915 6.03967 17.2259 6.17409C17.3603 6.3085 17.4668 6.4682 17.5392 6.64397C17.6116 6.81973 17.6484 7.00809 17.6476 7.19818C17.6469 7.38827 17.6085 7.57633 17.5347 7.7515C17.4608 7.92667 17.3531 8.0855 17.2176 8.21881L13.908 12.0012L17.2176 15.7812C17.3515 15.9149 17.4577 16.0738 17.5301 16.2486C17.6026 16.4234 17.6399 16.6108 17.6399 16.8C17.6399 16.9893 17.6026 17.1766 17.5301 17.3514C17.4577 17.5263 17.3515 17.6851 17.2176 17.8188Z" fill="#D70000"/>
            </svg>
        </div>
        {/* Table */}
        <div
            className="flex flex-col bg-[#F6F5F5] mt-[9px] p-[2px]  min-h-[30vh] max-h-[100%]">
            <div
                className={`flex flex-row border-[#000] border-solid border-[1px] w-fit mt-1 ml-[1px]`}>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    1
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    2
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    3
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    4
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    5
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    6
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    7
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    8
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    9
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    10
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    11
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    12
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    13
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    14
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    15
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    16
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    17
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    18
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000] border-r-[#000] border-r-solid border-r-[1px] cursor-pointer hover:bg-[#B6CEFD]">
                    19
                </div>
                <div
                    className="flex justify-center items-center w-8 h-8 bg-[#E9E9E9] text-[#000]  cursor-pointer hover:bg-[#B6CEFD]">
                    20
                </div>
            </div>
            {/* Table Header */}
            <TableHeader
                total={4}
                value1="name"
                value2="part"
                value3="type"
                value4="enabled"
                />
            {/* Table Sample Row */}

            <TableContent
                total="4"
                value1="Lower Strips - 1"
                value2="R5369-JK"
                value3=""
                value4={<input type="checkbox" />}
                class=""
                />
        </div>
    </div>
  )
}

export default Feeders
