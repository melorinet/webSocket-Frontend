import { useState } from "react"

const Jobs = () => {
    const [distance, setDistance] = useState(0.01)
    const [speed, setSpeed] = useState(100)



    const handleSetDistance = (value) =>{
        setDistance(value)
    }

    const handleSetSpeed = (value) => {
        setSpeed(value)
    }

  return (
    <div
        className={`bg-[#B5D4FA] h-[40vh] w-full relative`}>
        <div
            className=" absolute top-2 left-1">
            <button
                className={`pt-[6px] pb-[5px] px-[11px] rounded-[21px] bg-[#D3D3D3] mr-1`}>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 8.29792L24.7917 14.8604V26.25H21.875V17.5H13.125V26.25H10.2084V14.8604L17.5 8.29792ZM17.5 4.375L2.91669 17.5H7.29169V29.1667H16.0417V20.4167H18.9584V29.1667H27.7084V17.5H32.0834L17.5 4.375Z" fill="#D70000"/>
                </svg>
            </button>
            <button
                className={`py-[8px] px-[12px] rounded-[21px] bg-[#fff] mr-1`}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.7907 31.0107L16.776 31.0133L16.6813 31.06L16.6547 31.0653L16.636 31.06L16.5413 31.0133C16.5271 31.0089 16.5164 31.0111 16.5093 31.02L16.504 31.0333L16.4813 31.604L16.488 31.6307L16.5013 31.648L16.64 31.7467L16.66 31.752L16.676 31.7467L16.8147 31.648L16.8307 31.6267L16.836 31.604L16.8133 31.0347C16.8098 31.0204 16.8022 31.0124 16.7907 31.0107ZM17.144 30.86L17.1267 30.8627L16.88 30.9867L16.8667 31L16.8627 31.0147L16.8867 31.588L16.8933 31.604L16.904 31.6133L17.172 31.7373C17.1889 31.7418 17.2018 31.7382 17.2107 31.7267L17.216 31.708L17.1707 30.8893C17.1662 30.8733 17.1573 30.8636 17.144 30.86ZM16.1907 30.8627C16.1848 30.8591 16.1778 30.858 16.171 30.8594C16.1643 30.8609 16.1585 30.865 16.1547 30.8707L16.1467 30.8893L16.1013 31.708C16.1022 31.724 16.1098 31.7347 16.124 31.74L16.144 31.7373L16.412 31.6133L16.4253 31.6027L16.4307 31.588L16.4533 31.0147L16.4493 30.9987L16.436 30.9853L16.1907 30.8627Z" fill="#03C42C"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M18 4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2C15.4696 2 14.9609 2.21071 14.5858 2.58579C14.2107 2.96086 14 3.46957 14 4V17.3333C14 17.8638 14.2107 18.3725 14.5858 18.7475C14.9609 19.1226 15.4696 19.3333 16 19.3333C16.5304 19.3333 17.0391 19.1226 17.4142 18.7475C17.7893 18.3725 18 17.8638 18 17.3333V4ZM10.472 7.66667C10.6909 7.52125 10.879 7.33415 11.0255 7.11604C11.1721 6.89794 11.2742 6.6531 11.3262 6.39551C11.3781 6.13792 11.3788 5.87262 11.3282 5.61476C11.2776 5.35691 11.1768 5.11154 11.0313 4.89267C10.8859 4.6738 10.6988 4.48571 10.4807 4.33915C10.2626 4.19259 10.0178 4.09042 9.76018 4.03849C9.50259 3.98655 9.23729 3.98585 8.97943 4.03644C8.72157 4.08703 8.47621 4.18792 8.25734 4.33333C6.33198 5.60997 4.75282 7.34363 3.66093 9.37945C2.56903 11.4153 1.9984 13.6899 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 11.128 27.5107 6.84 23.7427 4.33333C23.3006 4.03983 22.7601 3.93394 22.24 4.03896C21.7199 4.14398 21.2628 4.45131 20.9693 4.89333C20.6758 5.33536 20.5699 5.87588 20.675 6.39598C20.78 6.91608 21.0873 7.37316 21.5293 7.66667C23.3195 8.85419 24.6796 10.5866 25.4083 12.6074C26.1371 14.6282 26.1957 16.83 25.5756 18.8867C24.9554 20.9435 23.6894 22.7458 21.965 24.0269C20.2406 25.308 18.1495 25.9998 16.0013 25.9998C13.8531 25.9998 11.762 25.308 10.0377 24.0269C8.31328 22.7458 7.04728 20.9435 6.42712 18.8867C5.80695 16.83 5.86558 14.6282 6.59433 12.6074C7.32309 10.5866 8.68188 8.85419 10.472 7.66667Z" fill="#03C42C"/>
                </svg>
            </button>
        </div>
        <div
            className="flex flex-row ">
            {/* Left Btns */}
            <div
                className="w-[55%] min-h-[32vh] h-full mt-[7vh] pt-1">
                    {/* Row 1 */}
                    <div
                        className="flex flex-row">
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>
                            X / Y
                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-2 h-12  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>
                            Z
                        </div>
                        
                    </div>
                    {/* Row 2 */}
                    <div
                        className="flex flex-row">
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>
                            <svg 
                                className=" cursor-pointer"
                                width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="41" height="39" rx="5" fill="white"/>
                                <path d="M21.7916 13.1112V28.8333H19.2083V13.1112L12.2798 20.0397L10.4534 18.2132L20.5 8.16666L30.5465 18.2132L28.7201 20.0397L21.7916 13.1112Z" fill="#7E7D7D"/>
                            </svg>

                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-2 h-12  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>
                            <svg 
                                className=" cursor-pointer"
                                width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="41" height="39" rx="5" fill="white"/>
                                <path d="M21.7916 13.1112V28.8333H19.2083V13.1112L12.2798 20.0397L10.4534 18.2132L20.5 8.16666L30.5465 18.2132L28.7201 20.0397L21.7916 13.1112Z" fill="#7E7D7D"/>
                            </svg>
                        </div>
                        
                    </div>
                    {/* Row 3 */}
                    <div
                        className="flex flex-row">
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>
                            <svg 
                                className=" cursor-pointer"
                                width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="41" height="39" rx="5" fill="white"/>
                                <path d="M15.1112 20.2083H30.8333V22.7917H15.1112L22.0397 29.7202L20.2133 31.5466L10.1667 21.5L20.2133 11.4534L22.0397 13.2798L15.1112 20.2083Z" fill="#7E7D7D"/>
                            </svg>
                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>
                            <svg 
                                className=" cursor-pointer"
                                width="50" height="41" viewBox="0 0 50 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="41" rx="20.5" fill="#4468AF"/>
                                <path d="M27.6 18.6667H23.3333V13.3333H27.6C28.3072 13.3333 28.9855 13.6143 29.4856 14.1144C29.9857 14.6145 30.2667 15.2928 30.2667 16C30.2667 16.7072 29.9857 17.3855 29.4856 17.8856C28.9855 18.3857 28.3072 18.6667 27.6 18.6667ZM27.3333 8H18V32H23.3333V24H27.3333C29.4551 24 31.4899 23.1571 32.9902 21.6569C34.4905 20.1566 35.3333 18.1217 35.3333 16C35.3333 11.5733 31.7467 8 27.3333 8Z" fill="#909090"/>
                            </svg>

                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>
                            <svg 
                                className=" cursor-pointer"
                                width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="41" height="39" rx="5" fill="white"/>
                                <path d="M25.8889 20.7917H10.1667V18.2083H25.8889L18.9604 11.2798L20.7868 9.45341L30.8334 19.5L20.7868 29.5466L18.9604 27.7202L25.8889 20.7917Z" fill="#7E7D7D"/>
                            </svg>
                        </div>
                        <div 
                            className={` w-2 h-12  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>
                            <svg 
                                className=" cursor-pointer"
                                width="50" height="41" viewBox="0 0 50 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="41" rx="20.5" fill="#4468AF"/>
                                <path d="M27.6 18.6667H23.3333V13.3333H27.6C28.3072 13.3333 28.9855 13.6143 29.4856 14.1144C29.9857 14.6145 30.2667 15.2928 30.2667 16C30.2667 16.7072 29.9857 17.3855 29.4856 17.8856C28.9855 18.3857 28.3072 18.6667 27.6 18.6667ZM27.3333 8H18V32H23.3333V24H27.3333C29.4551 24 31.4899 23.1571 32.9902 21.6569C34.4905 20.1566 35.3333 18.1217 35.3333 16C35.3333 11.5733 31.7467 8 27.3333 8Z" fill="#909090"/>
                            </svg>
                        </div>
                        
                    </div>
                    {/* Row 4 */}
                    <div
                        className="flex flex-row">
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>
                            <svg 
                                className=" cursor-pointer"
                                width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="41" height="39" rx="5" fill="white"/>
                                <path d="M19.2084 25.8888V10.1667H21.7917V25.8888L28.7202 18.9603L30.5466 20.7867L20.5 30.8333L10.4535 20.7867L12.2799 18.9603L19.2084 25.8888Z" fill="#7E7D7D"/>
                            </svg>
                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-2 h-12  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>
                            <svg 
                                className=" cursor-pointer"
                                width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="41" height="39" rx="5" fill="white"/>
                                <path d="M19.2084 25.8888V10.1667H21.7917V25.8888L28.7202 18.9603L30.5466 20.7867L20.5 30.8333L10.4535 20.7867L12.2799 18.9603L19.2084 25.8888Z" fill="#7E7D7D"/>
                            </svg>

                        </div>
                        
                    </div>
                    {/* Row 5 */}
                    <div
                        className="flex flex-row">
                        <div 
                            className={` w-12 h-2  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-12 h-2  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-12 h-2  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-2 h-2  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-12 h-2  flex justify-center items-center m-[1px]`}>

                        </div>
                        
                    </div>
                    {/* Row 6 */}
                    <div
                        className="flex flex-row">
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>
                            C
                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>
                            <svg 
                                className=" cursor-pointer"
                                width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="41" height="39" rx="5" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.5 12.3104C15.825 12.3104 12.0417 16.0877 12.0417 20.7385C12.0423 22.2441 12.4465 23.722 13.2122 25.0183C13.9778 26.3147 15.077 27.3821 16.3953 28.1094C16.9286 28.4058 17.4925 28.6422 18.087 28.8187C18.2391 28.8637 18.3809 28.9383 18.5043 29.0382C18.6276 29.1381 18.7301 29.2613 18.8058 29.4007C18.8816 29.5402 18.9291 29.6932 18.9457 29.8511C18.9623 30.0089 18.9476 30.1684 18.9026 30.3206C18.8575 30.4728 18.7829 30.6146 18.6831 30.738C18.5832 30.8613 18.46 30.9638 18.3205 31.0395C18.1811 31.1152 18.028 31.1628 17.8702 31.1794C17.7124 31.196 17.5528 31.1813 17.4006 31.1362C16.6443 30.912 15.9146 30.6061 15.2244 30.224C13.5286 29.2875 12.1147 27.9138 11.13 26.2456C10.1452 24.5774 9.62552 22.6757 9.625 20.7385C9.625 14.7452 14.497 9.89496 20.5 9.89496C21.9983 9.89496 23.4302 10.197 24.7316 10.7468C25.0269 10.8713 25.2607 11.1081 25.3814 11.4049C25.5022 11.7018 25.5001 12.0344 25.3756 12.3297C25.2511 12.6251 25.0144 12.8588 24.7176 12.9796C24.4207 13.1004 24.088 13.0983 23.7927 12.9738C22.7505 12.5348 21.6309 12.3092 20.5 12.3104ZM19.775 30.4499C19.7579 30.1301 19.8684 29.8166 20.0823 29.5783C20.2962 29.3399 20.5959 29.1962 20.9157 29.1787C22.0241 29.12 23.11 28.8437 24.1117 28.3655C24.3996 28.2369 24.7265 28.2259 25.0224 28.3349C25.3183 28.4439 25.5599 28.6643 25.6956 28.949C25.8312 29.2337 25.8502 29.5602 25.7484 29.8587C25.6466 30.1572 25.4322 30.404 25.1509 30.5466C23.8644 31.1606 22.4697 31.5158 21.0462 31.5918C20.7262 31.6089 20.4125 31.4982 20.1741 31.2841C19.9357 31.07 19.7922 30.7699 19.775 30.4499ZM28.707 15.4968C28.9969 15.3606 29.329 15.345 29.6303 15.4535C29.9317 15.5621 30.1776 15.7858 30.3141 16.0756C30.9223 17.3645 31.2713 18.7604 31.3412 20.1839C31.3572 20.5041 31.2454 20.8175 31.0303 21.0552C30.8153 21.2929 30.5146 21.4354 30.1945 21.4515C29.8743 21.4675 29.5609 21.3557 29.3232 21.1406C29.0855 20.9256 28.9429 20.6249 28.9269 20.3047C28.8736 19.1962 28.6026 18.109 28.1294 17.1051C28.0617 16.9616 28.023 16.8061 28.0154 16.6476C28.0078 16.4891 28.0315 16.3307 28.0851 16.1813C28.1388 16.032 28.2213 15.8947 28.328 15.7772C28.4347 15.6598 28.5635 15.5645 28.707 15.4968ZM26.8413 28.1021C26.6033 27.8877 26.4601 27.5875 26.4434 27.2676C26.4266 26.9476 26.5376 26.6341 26.7519 26.396C27.4939 25.5698 28.0684 24.6075 28.4436 23.5624C28.4967 23.4126 28.5789 23.2747 28.6854 23.1567C28.7919 23.0387 28.9207 22.9428 29.0643 22.8746C29.2079 22.8065 29.3636 22.7673 29.5224 22.7594C29.6812 22.7515 29.84 22.775 29.9896 22.8286C30.1393 22.8822 30.277 22.9648 30.3947 23.0716C30.5124 23.1785 30.6078 23.3076 30.6756 23.4514C30.7433 23.5952 30.782 23.751 30.7894 23.9098C30.7969 24.0686 30.7729 24.2273 30.7189 24.3768C30.2375 25.718 29.5 26.9529 28.5475 28.0127C28.3331 28.2508 28.0329 28.3939 27.7129 28.4107C27.393 28.4274 27.0795 28.3165 26.8413 28.1021Z" fill="#878585"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.6823 7.69821C22.804 7.63743 22.9366 7.60125 23.0724 7.59174C23.2081 7.58222 23.3444 7.59957 23.4735 7.64277C23.6025 7.68598 23.7218 7.7542 23.8245 7.84354C23.9272 7.93287 24.0112 8.04157 24.0718 8.16342L25.6813 11.4054C26.004 12.0543 25.7369 12.8433 25.0856 13.1647L21.834 14.7706C21.7115 14.8367 21.577 14.8775 21.4384 14.8904C21.2998 14.9034 21.1601 14.8882 21.0275 14.846C20.8949 14.8037 20.7722 14.7351 20.6667 14.6443C20.5612 14.5535 20.475 14.4424 20.4134 14.3176C20.3518 14.1928 20.316 14.0569 20.3082 13.9179C20.3003 13.779 20.3205 13.6398 20.3676 13.5089C20.4147 13.3779 20.4878 13.2578 20.5823 13.1557C20.6769 13.0536 20.7911 12.9716 20.9181 12.9146L23.4846 11.6458L22.2122 9.08659C22.1518 8.96466 22.1159 8.832 22.1068 8.69621C22.0976 8.56042 22.1153 8.42416 22.1588 8.29521C22.2024 8.16627 22.2709 8.04717 22.3605 7.94473C22.4501 7.84229 22.5603 7.75852 22.6823 7.69821Z" fill="#B3B3B3"/>
                            </svg>
                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>
                            <svg 
                                className=" cursor-pointer"
                                width="50" height="41" viewBox="0 0 50 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="41" rx="20.5" fill="#4468AF"/>
                                <path d="M27.6 18.6667H23.3333V13.3333H27.6C28.3072 13.3333 28.9855 13.6143 29.4856 14.1144C29.9857 14.6145 30.2667 15.2928 30.2667 16C30.2667 16.7072 29.9857 17.3855 29.4856 17.8856C28.9855 18.3857 28.3072 18.6667 27.6 18.6667ZM27.3333 8H18V32H23.3333V24H27.3333C29.4551 24 31.4899 23.1571 32.9902 21.6569C34.4905 20.1566 35.3333 18.1217 35.3333 16C35.3333 11.5733 31.7467 8 27.3333 8Z" fill="#909090"/>
                            </svg>
                        </div>
                        <div 
                            className={` w-2 h-12  flex justify-center items-center m-[1px]`}>

                        </div>
                        <div 
                            className={` w-12 h-12  flex justify-center items-center m-[1px]`}>
                            <svg 
                                className=" cursor-pointer"
                                width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="41" height="39" rx="5" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.5 12.3104C15.825 12.3104 12.0417 16.0877 12.0417 20.7385C12.0423 22.2441 12.4465 23.722 13.2122 25.0183C13.9778 26.3147 15.077 27.3821 16.3953 28.1094C16.9286 28.4058 17.4925 28.6422 18.087 28.8187C18.2391 28.8637 18.3809 28.9383 18.5043 29.0382C18.6276 29.1381 18.7301 29.2613 18.8058 29.4007C18.8816 29.5402 18.9291 29.6932 18.9457 29.8511C18.9623 30.0089 18.9476 30.1684 18.9026 30.3206C18.8575 30.4728 18.7829 30.6146 18.6831 30.738C18.5832 30.8613 18.46 30.9638 18.3205 31.0395C18.1811 31.1152 18.028 31.1628 17.8702 31.1794C17.7124 31.196 17.5528 31.1813 17.4006 31.1362C16.6443 30.912 15.9146 30.6061 15.2244 30.224C13.5286 29.2875 12.1147 27.9138 11.13 26.2456C10.1452 24.5774 9.62552 22.6757 9.625 20.7385C9.625 14.7452 14.497 9.89496 20.5 9.89496C21.9983 9.89496 23.4302 10.197 24.7316 10.7468C25.0269 10.8713 25.2607 11.1081 25.3814 11.4049C25.5022 11.7018 25.5001 12.0344 25.3756 12.3297C25.2511 12.6251 25.0144 12.8588 24.7176 12.9796C24.4207 13.1004 24.088 13.0983 23.7927 12.9738C22.7505 12.5348 21.6309 12.3092 20.5 12.3104ZM19.775 30.4499C19.7579 30.1301 19.8684 29.8166 20.0823 29.5783C20.2962 29.3399 20.5959 29.1962 20.9157 29.1787C22.0241 29.12 23.11 28.8437 24.1117 28.3655C24.3996 28.2369 24.7265 28.2259 25.0224 28.3349C25.3183 28.4439 25.5599 28.6643 25.6956 28.949C25.8312 29.2337 25.8502 29.5602 25.7484 29.8587C25.6466 30.1572 25.4322 30.404 25.1509 30.5466C23.8644 31.1606 22.4697 31.5158 21.0462 31.5918C20.7262 31.6089 20.4125 31.4982 20.1741 31.2841C19.9357 31.07 19.7922 30.7699 19.775 30.4499ZM28.707 15.4968C28.9969 15.3606 29.329 15.345 29.6303 15.4535C29.9317 15.5621 30.1776 15.7858 30.3141 16.0756C30.9223 17.3645 31.2713 18.7604 31.3412 20.1839C31.3572 20.5041 31.2454 20.8175 31.0303 21.0552C30.8153 21.2929 30.5146 21.4354 30.1945 21.4515C29.8743 21.4675 29.5609 21.3557 29.3232 21.1406C29.0855 20.9256 28.9429 20.6249 28.9269 20.3047C28.8736 19.1962 28.6026 18.109 28.1294 17.1051C28.0617 16.9616 28.023 16.8061 28.0154 16.6476C28.0078 16.4891 28.0315 16.3307 28.0851 16.1813C28.1388 16.032 28.2213 15.8947 28.328 15.7772C28.4347 15.6598 28.5635 15.5645 28.707 15.4968ZM26.8413 28.1021C26.6033 27.8877 26.4601 27.5875 26.4434 27.2676C26.4266 26.9476 26.5376 26.6341 26.7519 26.396C27.4939 25.5698 28.0684 24.6075 28.4436 23.5624C28.4967 23.4126 28.5789 23.2747 28.6854 23.1567C28.7919 23.0387 28.9207 22.9428 29.0643 22.8746C29.2079 22.8065 29.3636 22.7673 29.5224 22.7594C29.6812 22.7515 29.84 22.775 29.9896 22.8286C30.1393 22.8822 30.277 22.9648 30.3947 23.0716C30.5124 23.1785 30.6078 23.3076 30.6756 23.4514C30.7433 23.5952 30.782 23.751 30.7894 23.9098C30.7969 24.0686 30.7729 24.2273 30.7189 24.3768C30.2375 25.718 29.5 26.9529 28.5475 28.0127C28.3331 28.2508 28.0329 28.3939 27.7129 28.4107C27.393 28.4274 27.0795 28.3165 26.8413 28.1021Z" fill="#878585"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.6823 7.69821C22.804 7.63743 22.9366 7.60125 23.0724 7.59174C23.2081 7.58222 23.3444 7.59957 23.4735 7.64277C23.6025 7.68598 23.7218 7.7542 23.8245 7.84354C23.9272 7.93287 24.0112 8.04157 24.0718 8.16342L25.6813 11.4054C26.004 12.0543 25.7369 12.8433 25.0856 13.1647L21.834 14.7706C21.7115 14.8367 21.577 14.8775 21.4384 14.8904C21.2998 14.9034 21.1601 14.8882 21.0275 14.846C20.8949 14.8037 20.7722 14.7351 20.6667 14.6443C20.5612 14.5535 20.475 14.4424 20.4134 14.3176C20.3518 14.1928 20.316 14.0569 20.3082 13.9179C20.3003 13.779 20.3205 13.6398 20.3676 13.5089C20.4147 13.3779 20.4878 13.2578 20.5823 13.1557C20.6769 13.0536 20.7911 12.9716 20.9181 12.9146L23.4846 11.6458L22.2122 9.08659C22.1518 8.96466 22.1159 8.832 22.1068 8.69621C22.0976 8.56042 22.1153 8.42416 22.1588 8.29521C22.2024 8.16627 22.2709 8.04717 22.3605 7.94473C22.4501 7.84229 22.5603 7.75852 22.6823 7.69821Z" fill="#B3B3B3"/>
                            </svg>
                        </div>
                        
                    </div>

            </div>
            {/* Right Ranges */}
            <div 
                className=" flex flex-row justify-between px-2 w-[45%] min-h-[30vh] h-[32vh] mt-[7vh]">
                <div
                    className="flex flex-col">
                    <span
                        className="text-[10px]">
                    Distance
                    <br />
                    [mm/deg]
                    </span>
                    <div
                        className="flex flex-col items-center h-full bg-white rounded-[15px] relative">
                        <div
                            className="h-auto absolute top-[11%] left-[48%] bottom-[8%] w-[2px] -z-0 bg-black">

                        </div>
                        <div
                            onClick={()=>handleSetDistance(100)}
                            className={` cursor-pointer flex relative justify-center items-center w-6 ${(distance == 100)?"text-[#D70000]":"text-[#B3B3B3]"} min-h-[18%] mt-[11%] z-10 justify-center p-0 m-0 pb-2 `}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" transform="rotate(-90 10 10)" fill={`${(distance == 100)?"#D70000":"#B3B3B3"}`}/>
                            </svg>
                            <span
                                className={`text-[#000] text-[12px] absolute -right-4 rotate-90`}>
                                100
                            </span>
                        </div>
                        <div
                            onClick={()=>handleSetDistance(10)}
                            className={` cursor-pointer flex relative justify-center items-center w-6 ${(distance == 10)?"text-[#D70000]":"text-[#B3B3B3]"} min-h-[18%] mt-[11%] z-10 justify-center 0 p-0 m-0 pb-2 `}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" transform="rotate(-90 10 10)" fill={`${(distance == 10)?"#D70000":"#B3B3B3"}`}/>
                            </svg>
                            <span
                                className={`text-[#000] text-[12px] absolute -right-3 rotate-90`}>
                                10
                            </span>
                        </div>
                        <div
                            onClick={()=>handleSetDistance(1)}
                            className={` cursor-pointer flex relative justify-center items-center w-6 ${(distance == 1)?"text-[#D70000]":"text-[#B3B3B3]"} min-h-[18%] mt-[11%] z-10 justify-center  p-0 m-0 pb-2 `}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" transform="rotate(-90 10 10)" fill={`${(distance == 1)?"#D70000":"#B3B3B3"}`}/>
                            </svg>
                            <span
                                className={`text-[#000] text-[12px] absolute -right-2 rotate-90`}>
                                1
                            </span>
                        </div>
                        <div
                            onClick={()=>handleSetDistance(0.1)}
                            className={` cursor-pointer flex relative justify-center items-center w-6 ${(distance == 0.1)?"text-[#D70000]":"text-[#B3B3B3]"} min-h-[18%] mt-[11%] z-10 justify-center p-0 m-0 pb-2 `}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" transform="rotate(-90 10 10)" fill={`${(distance == 0.1)?"#D70000":"#B3B3B3"}`}/>
                            </svg>
                            <span
                                className={`text-[#000] text-[12px] absolute -right-3 rotate-90`}>
                                0.1
                            </span>
                        </div>
                        <div
                            onClick={()=>handleSetDistance(0.01)}
                            className={` cursor-pointer flex relative justify-center items-center w-10 ${(distance == 0.01)?"text-[#D70000]":"text-[#B3B3B3]"} min-h-[18%] mt-[11%] z-10 justify-center  p-0 m-0 pb-2 `}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" transform="rotate(-90 10 10)" fill={`${(distance == 0.01)?"#D70000":"#B3B3B3"}`}/>
                            </svg>
                            <span
                                className={`text-[#000] text-[12px] absolute left-[60%] rotate-90`}>
                                0.01
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col items-end justify-end relative">
                    <input type="range" 
                        className={`relative h-[31.5vh] rotate-180 bg-transparent`}
                        style={{writingMode:'vertical-lr',verticalAlign:'middle'}}
                        onChange={(e)=>handleSetSpeed(e.currentTarget.value)}
                        value={speed} step={5} min={0} max={100} /> 
                    <span
                        style={{writingMode:'vertical-lr',verticalAlign:'middle'}}
                        className="absolute flex rotate-180 justify-center items-center text-[14px] right-3 top-[30%] h-[14vh] w-[1.5vw]">
                        Speed [ {speed} % ]
                    </span>
                    <span
                        className="text-[10px] absolute -right-3 -bottom-[1%]">
                        0
                    </span>
                    <span
                        className="text-[10px] absolute -right-4 bottom-[22%]">
                        25
                    </span>
                    <span
                        className="text-[10px] absolute -right-4 bottom-[46%]">
                        50
                    </span>

                    <span
                        className="text-[10px] absolute -right-4 bottom-[69%]">
                        75
                    </span>
                    <span
                        className="text-[10px] absolute -right-5 bottom-[93%]">
                        100
                    </span>
                    
                </div>
                <div
                    className="flex flex-col">
                    <div
                        className={`w-10 h-10 cursor-pointer flex justify-center items-center m-[4px] bg-slate-500`}>
                        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_312_9)">
                            <path d="M14 27V19H12L12.0107 26.9391H14V24.693V27Z" fill="black"/>
                            <path d="M21.3201 7H4.6799C4.12417 7 3.80398 7.44917 4.13239 7.76811L11.579 15H14.421L21.8676 7.76811C22.196 7.44917 21.8758 7 21.3201 7Z" fill="black"/>
                            <path d="M19 23C19 26.866 16.3137 30 13 30C9.68629 30 7 26.866 7 23C7 19.134 9.68629 16 13 16C16.3137 16 19 19.134 19 23ZM8.13777 23C8.13777 26.1329 10.3147 28.6726 13 28.6726C15.6853 28.6726 17.8622 26.1329 17.8622 23C17.8622 19.8671 15.6853 17.3274 13 17.3274C10.3147 17.3274 8.13777 19.8671 8.13777 23Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_312_9">
                            <rect width="26" height="30" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>


                    </div>
                    
                    <div
                        className={`w-10 h-10 m-[4px] bg-slate-500/0`}>

                    </div>
                    <div
                        className={`w-10 h-10 m-[4px] bg-slate-500/0`}>

                    </div>
                    <div
                        className={`w-10 h-10 m-[4px] bg-slate-500/0`}>

                    </div>
                    <div
                        className={`w-10 h-10 m-[4px] bg-slate-500/0`}>

                    </div>
                    <div
                        className={`w-10 h-10 cursor-pointer flex justify-center items-center m-[4px] bg-slate-500`}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_312_2)">
                            <path d="M6.25 18.75H3.75V23.75C3.75 25.1313 4.86875 26.25 6.25 26.25H11.25V23.75H6.25V18.75ZM6.25 6.25H11.25V3.75H6.25C4.86875 3.75 3.75 4.86875 3.75 6.25V11.25H6.25V6.25ZM23.75 3.75H18.75V6.25H23.75V11.25H26.25V6.25C26.25 4.86875 25.1313 3.75 23.75 3.75ZM23.75 23.75H18.75V26.25H23.75C25.1313 26.25 26.25 25.1313 26.25 23.75V18.75H23.75V23.75ZM15 10C12.2375 10 10 12.2375 10 15C10 17.7625 12.2375 20 15 20C17.7625 20 20 17.7625 20 15C20 12.2375 17.7625 10 15 10ZM15 17.5C13.6187 17.5 12.5 16.3813 12.5 15C12.5 13.6187 13.6187 12.5 15 12.5C16.3813 12.5 17.5 13.6187 17.5 15C17.5 16.3813 16.3813 17.5 15 17.5Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_312_2">
                            <rect width="30" height="30" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Jobs
