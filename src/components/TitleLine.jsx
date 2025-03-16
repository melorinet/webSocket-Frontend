
const TitleLine = (props) => {
  return (
    <div
        className={`text-[#FFF] relative pt-[10px] ${props.className}`}>
        <span
        className=" absolute -translate-y-[13px] bg-[#242F45] pr-[4px] font-[400]">
            {props.title??'title'}
        </span>
        <hr />
    </div>
  )
}

export default TitleLine
