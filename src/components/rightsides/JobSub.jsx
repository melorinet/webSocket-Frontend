import TableContent from "../TableContent"
import TableHeader from "../TableHeader"
import TitleLine from "../TitleLine"

const JobSub = () => {
  return (
    <div
        className={`mt-2 flex flex-col`}>
        <TitleLine
            title="placements"/>
        <div
            className={`bg-[#B9B9B9] h-[40vh] w-[100%] mx-[1px] mt-[2vh] py-[18px] px-[13px]`}>
            <div
                className={`flex flex-row justify-between`}>
                <div
                    className={`gap-2 flex flex-row `}>
                    <svg 
                        className='mt-[4px]'
                        width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6252 6.806H6.93921V11.558H5.06921V6.806H0.405211V5.112H5.06921V0.337999H6.93921V5.112H11.6252V6.806Z" fill="black"/>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.348 14.849C14.123 15.074 13.8178 15.2004 13.4995 15.2004C13.1813 15.2004 12.8761 15.074 12.651 14.849L10 11.819L7.34901 14.848C7.23792 14.9609 7.10556 15.0507 6.95959 15.1122C6.81361 15.1738 6.6569 15.2058 6.49849 15.2064C6.34008 15.207 6.18311 15.1763 6.03664 15.116C5.89017 15.0557 5.75709 14.967 5.64507 14.8549C5.53306 14.7429 5.44434 14.6098 5.38401 14.4634C5.32369 14.3169 5.29297 14.1599 5.29361 14.0015C5.29426 13.8431 5.32626 13.6864 5.38777 13.5404C5.44929 13.3945 5.53909 13.2621 5.65201 13.151L8.41001 10.001L5.65101 6.849C5.53809 6.7379 5.44829 6.60555 5.38677 6.45957C5.32526 6.3136 5.29326 6.15688 5.29261 5.99848C5.29197 5.84007 5.32269 5.6831 5.38301 5.53663C5.44334 5.39015 5.53206 5.25707 5.64407 5.14506C5.75609 5.03305 5.88917 4.94432 6.03564 4.884C6.18211 4.82368 6.33908 4.79295 6.49749 4.7936C6.6559 4.79424 6.81261 4.82625 6.95859 4.88776C7.10456 4.94927 7.23692 5.03908 7.34801 5.152L10 8.183L12.651 5.152C12.7621 5.03908 12.8945 4.94927 13.0404 4.88776C13.1864 4.82625 13.3431 4.79424 13.5015 4.7936C13.6599 4.79295 13.8169 4.82368 13.9634 4.884C14.1099 4.94432 14.2429 5.03305 14.355 5.14506C14.467 5.25707 14.5557 5.39015 14.616 5.53663C14.6763 5.6831 14.7071 5.84007 14.7064 5.99848C14.7058 6.15688 14.6738 6.3136 14.6123 6.45957C14.5507 6.60555 14.4609 6.7379 14.348 6.849L11.59 10.001L14.348 13.151C14.4596 13.2624 14.5481 13.3948 14.6085 13.5405C14.6689 13.6861 14.7 13.8423 14.7 14C14.7 14.1577 14.6689 14.3139 14.6085 14.4595C14.5481 14.6052 14.4596 14.7376 14.348 14.849Z" fill="black"/>
                    </svg>
                    <svg width="1" height="25" viewBox="0 0 1 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" x2="0.5" y2="25" stroke="black"/>
                    </svg>
                </div>
                <div
                    className='flex flex-row'>
                        <span>
                            Search 
                        </span>
                        <input
                            className='ml-[4px]'
                            type='text'
                            />
                </div>
            </div>
            <div
                className='flex flex-col bg-[#F6F5F5] mt-[9px] p-[2px]  min-h-[30vh] max-h-[100%]'>
                    {/* Table Header */}
                <TableHeader
                    total={12}
                    value1="enabled"
                    value2="ID"
                    value3="Part"
                    value4="side"
                    value5="X"
                    value6="Y"
                    value7="Rot."
                    value8="Type"
                    value9="placed"
                    value10="status"
                    value11="error"
                    value12="comments"
                    />
                {/* Table Sample Row */}

                <TableContent
                    total="12"
                    value1="value1"
                    value2="value2"
                    value3="value3"
                    value4="value4"
                    value5="value5"
                    value6="value6"
                    value7="value7"
                    value8="value8"
                    value9="value9"
                    value10="value10"
                    value11="value11"
                    value12="value12"
                    class=""
                    />
            </div>
        </div>
    </div>
  )
}

export default JobSub
