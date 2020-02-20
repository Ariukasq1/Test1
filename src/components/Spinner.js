const Spinner = () => (
  <section>
    <div id="preloader">
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="e" className="letters-loading">
              e
            </span>
            <span data-text-preloader="r" className="letters-loading">
              r
            </span>
            <span data-text-preloader="x" className="letters-loading">
              x
            </span>
            <span data-text-preloader="e" className="letters-loading">
              e
            </span>
            <span data-text-preloader="s" className="letters-loading">
              s
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Spinner;
