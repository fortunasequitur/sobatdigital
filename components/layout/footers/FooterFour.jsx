"use client"; 

export default function FooterFour() {
  return (
    <footer className="footer -type-1 -light bg-dark-1 mt-40">
      <div className="flex justify-center">
        <img src="/img/blogCards/1/SS.png" alt="Trusted" className="max-w-xs h-auto" />
      </div>
      <div className="border-white-15-top">
        <div className="container">
          <div className="footer__bottom">
            <div className="row y-gap-5 justify-center items-center">
              <div className="col-auto text-white">
                <div>© Copyright Sobat Digital Media {new Date().getFullYear()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
