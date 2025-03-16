
const TableHeader = (props) => {
  var width = (100 / parseInt(props.total)) - 0.1;
  return (
    <div
        className="flex flex-row justify-between">
        {Array.from({ length: props.total }, (_, i) => (
            <div
                key={i}
                style={{width:`${width}%`}}
                className={`w-[9.8%] h-[40px] flex justify-center items-center ${(props.bgcolor=='true')?"":"bg-[#B6CEFD]"} text-[#000] border-[#e6e6e6] border-[2px]`}>
                {props[`value${(i+1)}`]}
            </div>
        ))}
    </div>
  )
}

export default TableHeader
