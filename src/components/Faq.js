const Faq = () => (
  <div className="sass-faq-section">
    <div className="section-shape-one">
      <img src="images/shape/shape-18.svg" alt="" />
    </div>
    <img src="images/shape/shape-26.svg" alt="" className="section-shape-two" />
    <img src="images/shape/shape-29.svg" alt="" className="section-shape-three" />
    <img src="images/shape/shape-30.svg" alt="" className="section-shape-four" />
    <div className="container">
      <div className="theme-title-one text-center hide-pr">
        <div className="icon-box hide-pr">
          <img src="images/shape/bg-shape1.svg" alt="" className="bg-shape" />
          <img src="images/icon/icon29.svg" alt="" className="icon" />
        </div>
        <h2 className="main-title">Questions? Look here.</h2>
      </div>{' '}
      {/* /.theme-title-one */}
      <p className="sub-heading">
        Can’t find answer? call us at <a href="#">+880 1820 788 800</a> or email us{' '}
        <a href="#">xcoinc@gmail.com</a>
      </p>
      <div className="faq-tab-wrapper">
        {/* Nav tabs */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#general">
              General
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#payment">
              Payment Gatway
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#feature">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#billing">
              Billing Problem
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#account">
              Account
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#service">
              Services
            </a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          {/* Single Tab */}
          <div id="general" className="tab-pane fade show active">
            <div className="row">
              <div className="col-lg-6">
                {/* ================== FAQ Panel ================ */}
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion">
                    <div className="panel">
                      <div className="panel-heading active-panel">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                            How to create customer panel?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse1" className="panel-collapse collapse show">
                        <div className="panel-body">
                          <p>
                            mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo
                            elabo et. Noluisse mnesarch Et ius vero incorrupte, eos deserunt quaeren
                            dum not. Vim elit facete ei sem, maluisset constituam.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 1 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                            Where is the edit optioon on dashboard?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse2" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 2 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                            Is there any custome pricing system?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse3" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 3 */}
                  </div>{' '}
                  {/* end #accordion */}
                </div>{' '}
                {/* End of .faq-panel */}
              </div>{' '}
              {/* /.col- */}
              <div className="col-lg-6">
                {/* ================== FAQ Panel ================ */}
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion2">
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion2" href="#collapse11">
                            How to create customer panel?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse11" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo
                            elabo et. Noluisse mnesarch Et ius vero incorrupte, eos deserunt quaeren
                            dum not. Vim elit facete ei sem, maluisset constituam.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 1 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion2" href="#collapse22">
                            Where is the edit optioon on dashboard?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse22" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 2 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion2" href="#collapse33">
                            How delete my account?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse33" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 3 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion2" href="#collapse44">
                            How to invite people with refferel link?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse44" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 4 */}
                  </div>{' '}
                  {/* end #accordion2 */}
                </div>{' '}
                {/* End of .faq-panel */}
              </div>{' '}
              {/* /.col- */}
            </div>{' '}
            {/* /.row */}
          </div>{' '}
          {/* /.tab-pane */}
          {/* Single Tab */}
          <div id="payment" className="tab-pane fade">
            <div className="row">
              <div className="col-lg-6">
                {/* ================== FAQ Panel ================ */}
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion3">
                    <div className="panel">
                      <div className="panel-heading active-panel">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion3" href="#collapse111">
                            Is there any custome pricing system?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse111" className="panel-collapse collapse show">
                        <div className="panel-body">
                          <p>
                            mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo
                            elabo et. Noluisse mnesarch Et ius vero incorrupte, eos deserunt quaeren
                            dum not. Vim elit facete ei sem, maluisset constituam.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 1 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion3" href="#collapse222">
                            Where is the edit optioon on dashboard?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse222" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 2 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion3" href="#collapse333">
                            How delete my account?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse333" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 3 */}
                  </div>{' '}
                  {/* end #accordion3 */}
                </div>{' '}
                {/* End of .faq-panel */}
              </div>{' '}
              {/* /.col- */}
              <div className="col-lg-6">
                {/* ================== FAQ Panel ================ */}
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion4">
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion4" href="#collapse41">
                            How the affiliate programe works?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse41" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo
                            elabo et. Noluisse mnesarch Et ius vero incorrupte, eos deserunt quaeren
                            dum not. Vim elit facete ei sem, maluisset constituam.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 1 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion4" href="#collapse42">
                            Where is the edit optioon on dashboard?{' '}
                          </a>
                        </h6>
                      </div>
                      <div id="collapse42" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 2 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion4" href="#collapse43">
                            How to invite people with refferel link?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse43" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 3 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion4" href="#collapse45">
                            How delete my account?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse45" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 4 */}
                  </div>{' '}
                  {/* end #accordion4 */}
                </div>{' '}
                {/* End of .faq-panel */}
              </div>{' '}
              {/* /.col- */}
            </div>{' '}
            {/* /.row */}
          </div>
          {/* Single Tab */}
          <div id="feature" className="tab-pane fade">
            <div className="row">
              <div className="col-lg-6">
                {/* ================== FAQ Panel ================ */}
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion5">
                    <div className="panel">
                      <div className="panel-heading active-panel">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion5" href="#collapse51">
                            How to create customer panel?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse51" className="panel-collapse collapse show">
                        <div className="panel-body">
                          <p>
                            mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo
                            elabo et. Noluisse mnesarch Et ius vero incorrupte, eos deserunt quaeren
                            dum not. Vim elit facete ei sem, maluisset constituam.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 1 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion5" href="#collapse52">
                            Where is the edit optioon on dashboard?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse52" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 2 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion5" href="#collapse53">
                            Is there any custome pricing system?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse53" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 3 */}
                  </div>{' '}
                  {/* end #accordion4 */}
                </div>{' '}
                {/* End of .faq-panel */}
              </div>{' '}
              {/* /.col- */}
              <div className="col-lg-6">
                {/* ================== FAQ Panel ================ */}
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion6">
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion6" href="#collapse61">
                            How the affiliate programe works?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse61" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo
                            elabo et. Noluisse mnesarch Et ius vero incorrupte, eos deserunt quaeren
                            dum not. Vim elit facete ei sem, maluisset constituam.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 1 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion6" href="#collapse62">
                            Where is the edit optioon on dashboard?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse62" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 2 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion6" href="#collapse63">
                            Is there any custome pricing system?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse63" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 3 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion6" href="#collapse64">
                            How to invite people with refferel link?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse64" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 4 */}
                  </div>{' '}
                  {/* end #accordion6 */}
                </div>{' '}
                {/* End of .faq-panel */}
              </div>{' '}
              {/* /.col- */}
            </div>{' '}
            {/* /.row */}
          </div>
          {/* Single Tab */}
          <div id="billing" className="tab-pane fade">
            <div className="row">
              <div className="col-lg-6">
                {/* ================== FAQ Panel ================ */}
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion7">
                    <div className="panel">
                      <div className="panel-heading active-panel">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion7" href="#collapse71">
                            How to create customer panel?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse71" className="panel-collapse collapse show">
                        <div className="panel-body">
                          <p>
                            mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo
                            elabo et. Noluisse mnesarch Et ius vero incorrupte, eos deserunt quaeren
                            dum not. Vim elit facete ei sem, maluisset constituam.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 1 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion7" href="#collapse72">
                            How delete my account?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse72" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 2 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion7" href="#collapse73">
                            Is there any custome pricing system?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse73" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 3 */}
                  </div>{' '}
                  {/* end #accordion7 */}
                </div>{' '}
                {/* End of .faq-panel */}
              </div>{' '}
              {/* /.col- */}
              <div className="col-lg-6">
                {/* ================== FAQ Panel ================ */}
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion8">
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion8" href="#collapse81">
                            How to invite people with refferel link?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse81" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo
                            elabo et. Noluisse mnesarch Et ius vero incorrupte, eos deserunt quaeren
                            dum not. Vim elit facete ei sem, maluisset constituam.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 1 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion8" href="#collapse82">
                            Where is the edit optioon on dashboard?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse82" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 2 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion8" href="#collapse83">
                            Is there any custome pricing system?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse83" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 3 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion8" href="#collapse84">
                            Is there any custome pricing system?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse84" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 4 */}
                  </div>{' '}
                  {/* end #accordion8 */}
                </div>{' '}
                {/* End of .faq-panel */}
              </div>{' '}
              {/* /.col- */}
            </div>{' '}
            {/* /.row */}
          </div>
          {/* Single Tab */}
          <div id="account" className="tab-pane fade">
            <div className="row">
              <div className="col-lg-6">
                {/* ================== FAQ Panel ================ */}
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion9">
                    <div className="panel">
                      <div className="panel-heading active-panel">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion9" href="#collapse91">
                            How to create customer panel?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse91" className="panel-collapse collapse show">
                        <div className="panel-body">
                          <p>
                            mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo
                            elabo et. Noluisse mnesarch Et ius vero incorrupte, eos deserunt quaeren
                            dum not. Vim elit facete ei sem, maluisset constituam.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 1 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion9" href="#collapse92">
                            Where is the edit optioon on dashboard?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse92" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 2 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion9" href="#collapse93">
                            Is there any custome pricing system?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse93" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 3 */}
                  </div>{' '}
                  {/* end #accordion9 */}
                </div>{' '}
                {/* End of .faq-panel */}
              </div>{' '}
              {/* /.col- */}
              <div className="col-lg-6">
                {/* ================== FAQ Panel ================ */}
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion10">
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion10" href="#collapse101">
                            How to create customer panel?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse101" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo
                            elabo et. Noluisse mnesarch Et ius vero incorrupte, eos deserunt quaeren
                            dum not. Vim elit facete ei sem, maluisset constituam.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 1 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion10" href="#collapse102">
                            Where is the edit optioon on dashboard?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse102" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 2 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion10" href="#collapse103">
                            Is there any custome pricing system?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse103" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 3 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion10" href="#collapse104">
                            Is there any custome pricing system?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse104" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 4 */}
                  </div>{' '}
                  {/* end #accordion10 */}
                </div>{' '}
                {/* End of .faq-panel */}
              </div>{' '}
              {/* /.col- */}
            </div>{' '}
            {/* /.row */}
          </div>
          {/* Single Tab */}
          <div id="service" className="tab-pane fade">
            <div className="row">
              <div className="col-lg-6">
                {/* ================== FAQ Panel ================ */}
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion13">
                    <div className="panel">
                      <div className="panel-heading active-panel">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion13" href="#collapse131">
                            How to create customer panel?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse131" className="panel-collapse collapse show">
                        <div className="panel-body">
                          <p>
                            mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo
                            elabo et. Noluisse mnesarch Et ius vero incorrupte, eos deserunt quaeren
                            dum not. Vim elit facete ei sem, maluisset constituam.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 1 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion13" href="#collapse132">
                            How the affiliate programe works?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse132" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 2 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion13" href="#collapse133">
                            Is there any custome pricing system?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse133" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 3 */}
                  </div>{' '}
                  {/* end #accordion13 */}
                </div>{' '}
                {/* End of .faq-panel */}
              </div>{' '}
              {/* /.col- */}
              <div className="col-lg-6">
                {/* ================== FAQ Panel ================ */}
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion14">
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion14" href="#collapse141">
                            How to create customer panel?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse141" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo
                            elabo et. Noluisse mnesarch Et ius vero incorrupte, eos deserunt quaeren
                            dum not. Vim elit facete ei sem, maluisset constituam.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 1 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion14" href="#collapse142">
                            Where is the edit optioon on dashboard?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse142" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 2 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion14" href="#collapse143">
                            Is there any custome pricing system?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse143" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 3 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion14" href="#collapse144">
                            How delete my account?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse144" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem
                            temporibus. Ei vix rebum noluisse voluptatibus, cum in legere
                            intellegebat, ius ad illum aperiri officiis.{' '}
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                    {/* /panel 4 */}
                  </div>{' '}
                  {/* end #accordion14 */}
                </div>{' '}
                {/* End of .faq-panel */}
              </div>{' '}
              {/* /.col- */}
            </div>{' '}
            {/* /.row */}
          </div>
        </div>{' '}
        {/* /.tab-content */}
      </div>
    </div>
  </div>
);

export default Faq;