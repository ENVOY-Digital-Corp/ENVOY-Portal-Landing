type Props = {
  title: string
}
const Category: React.FC<Props> = ({ title }) => {
  return (
    <div className="px-1 py-0.5 bg-neutral-200 bg-opacity-10 rounded-full justify-start items-start flex">
      <div className="px-1.5 flex-col justify-start items-start flex">
        <div className="text-white text-xs font-normal leading-none tracking-tight">
          {title}
        </div>
      </div>
    </div>
  )
}

export default Category
