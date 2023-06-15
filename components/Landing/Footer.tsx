import Link from "next/link"
import { Element, Link as ScrollLink } from "react-scroll"

const Footer = () => {
  return (
    <Element name="follow">
      <footer className="py-12 mt-16" id="follow">
        <div className="container">
          <div className="grid grid-cols-3 place-items-center border-t-2 pt-6 border-purple-600 gap-8">
            <div className="text-center">
              <a
                href="https://twitter.com/envoycorp"
                target="_blank"
                className="block p-2 uppercase"
              >
                Twitter
              </a>
            </div>
            <div className="text-center">
              <ScrollLink to="about" smooth className="block p-2 uppercase">
                About
              </ScrollLink>
            </div>
            <div className="text-center">
              <Link href="/privacy" className="block p-2 uppercase">
                Privacy
              </Link>
            </div>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/company/envoy-digital-corp-pte-ltd/"
                target="_blank"
                className="block p-2 uppercase"
              >
                Linkedin
              </a>
            </div>
            <div className="text-center">
              <ScrollLink to="features" smooth className="block p-2 uppercase">
                Feature
              </ScrollLink>
            </div>
            <div className="text-center">
              <Link href="/imprint" className="block p-2 uppercase">
                Imprint
              </Link>
            </div>
          </div>
          <div className="text-center text-sm mx-auto max-w-3xl mt-24 uppercase">
            <p>
              PT. INDO DIGITAL ASET
              <br /> Aset APL Tower - Central Park, Lantai 19 Unit T7, J Tanjung
              Duren Selatan, Grogol Petamburan Kota ADM, Jakarta Barat <br />{" "}
              DKI Jakarta <br /> (021) - 31997322 ext 147{" "}
            </p>
            <p className="mt-7">© ENVOY Portal {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </Element>
  )
}

export default Footer
