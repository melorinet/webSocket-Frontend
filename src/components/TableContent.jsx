
const TableContent = (props) => {
    var width = (100 / parseInt(props.total)) - 0.1;
    return(
        <div>
            <div
                className="flex flex-row justify-between mt-[1px]">
                {Array.from({ length: props.total }, (_, i) => (
                    <div
                    style={{width:`${width}%`}}
                    className={`h-[40px] flex justify-center items-center text-[#000] border-[#e6e6e6] border-[2px] ${props.class}`}
                    key={i}>
                    {props[`value${(i+1)}`]}
                    </div>
                ))}
            </div>
        </div>
    )
    
}

export default TableContent
