import Link from "next/link"

const Footer = () => {
  return (
    <footer className="py-12 mt-16">
      <div className="container">
        <div className="grid grid-cols-3 border-t-2 pt-6 border-purple-600 gap-8">
          <div className="text-center">
            <a href="#" className="block p-2 uppercase">
              Twitter
            </a>
          </div>
          <div className="text-center">
            <a href="#" className="block p-2 uppercase">
              About
            </a>
          </div>
          <div className="text-center">
            <Link href="/privacy" className="block p-2 uppercase">
              Privacy
            </Link>
          </div>
          <div className="text-center">
            <a href="#" className="block p-2 uppercase">
              Linkedin
            </a>
          </div>
          <div className="text-center">
            <a href="#" className="block p-2 uppercase">
              Feature
            </a>
          </div>
          <div className="text-center">
            <Link href="/imprint" className="block p-2 uppercase">
              Imprint
            </Link>
          </div>
        </div>
        <div className="text-center text-sm mx-auto max-w-3xl mt-24 uppercase">
          <p>
            PT. Indo Digital
            <br /> Aset APL Tower - Central Park, Lantai 19 Unit T7, J Tanjung
            Duren Selatan, Grogol Petamburan Kota ADM, Jakarta Barat <br /> DKI
            Jakarta <br /> (021) - 31997322 ext 147{" "}
          </p>
          <p className="mt-7">© ENVOY Portal 2022</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
