import { Link as MuiLink } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

type Props = {
  no: string
  title: string
  description: string
}
const NewsHighlightCard: React.FC<Props> = ({ no, title, description }) => {
  return (
    <div className="Card justify-start items-start gap-6 flex">
      <div className="CardContent justify-start items-start gap-6 flex">
        <h3 className="w-8 opacity-30 text-neutral-200 text-3xl font-medium leading-10">
          {no}
        </h3>
        <div className="Cardheader w-full flex-col justify-start items-start gap-2 flex">
          <div className="Content self-stretch flex-col justify-start items-start gap-2 flex">
            <p className="EternalCryptWizardryBc self-stretch text-white text-xl font-bold leading-loose">
              {title.length > 30 ? `${title.slice(0, 30)}...` : title}
            </p>
            <p className="GggEnvoyPortalThePioneerOfTheWeb3PaymentSolutionLoremIpsumDolorSitAmetConsecteturAdipiscingElit self-stretch opacity-40 text-white text-sm font-normal leading-snug">
              {description}
            </p>
          </div>
          <div className="Button px-1 py-1 rounded flex-col justify-center items-center flex">
            <div className="Base justify-center items-center gap-2 flex">
              <Link
                href="#"
                className="Button text-white text-xs font-medium leading-snug tracking-wide hover:underline"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsHighlightCard
