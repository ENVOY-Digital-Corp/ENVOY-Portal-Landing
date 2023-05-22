type Props = {
  title: string
  description: string
}
const FeatureCard: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="p-4 rounded-xl bg-gradient-to-r border-2 border-gray-500 from-[#060606] to-[#2c2c2c]">
      <h4 className="uppercase text-xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-gray-400 font-bold">
        {title}
      </h4>
      <p className="mt-2">{description}</p>
    </div>
  )
}

export default FeatureCard
