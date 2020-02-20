import React,{Component} from 'react';
import Layout from '../components/Layout';

class Blog extends Component {
  render() {
    return (
      <Layout>
        <div className="our-blog blog-filer mb-150">
          <div className="blog-filter-title">
            <p className="upper-title">Our News</p>
            <h2 className="main-title">Our inside stories <br/> for you</h2>
          </div>

          <ul className="isotop-menu-wrapper blog-filter-nav clearfix">
            <li className="is-checked" data-filter="*"><span>All</span></li>
            <li data-filter=".travel"><span>Travel</span></li>
            <li data-filter=".economy"><span>Economy</span></li>
            <li data-filter=".business"><span>Business</span></li>
            <li data-filter=".marketing"><span>Marketing</span></li>
            <li data-filter=".technology"><span>Technology</span></li>
          </ul>

          <div className="masnory-blog-wrapper">
            <div className="grid-sizer"></div>
            <div className="isotop-item economy marketing">
              <div className="single-blog-post">
                <div className="img-holder"><img src="images/blog/16.jpg" alt="" /></div>
                <div className="post-data">
                  <a href="#" className="date">23 July, 2018</a>
                  <h5 className="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" className="read-more"><i className="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
            <div className="isotop-item economy">
              <div className="single-blog-post">
                <div className="img-holder"><img src="images/blog/17.jpg" alt="" /></div>
                <div className="post-data">
                  <a href="#" className="date">15 march, 2018</a>
                  <h5 className="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" className="read-more"><i className="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
            <div className="isotop-item travel marketing">
              <div className="single-blog-post">
                <div className="img-holder"><img src="images/blog/18.jpg" alt="" /></div>
                <div className="post-data">
                  <a href="#" className="date">05 July, 2018</a>
                  <h5 className="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" className="read-more"><i className="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
            <div className="isotop-item travel economy technology">
              <div className="single-blog-post">
                <div className="img-holder"><img src="images/blog/19.jpg" alt="" /></div>
                <div className="post-data">
                  <a href="#" className="date">11 june, 2018</a>
                  <h5 className="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" className="read-more"><i className="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
            <div className="isotop-item economy marketing">
              <div className="single-blog-post">
                <div className="img-holder"><img src="images/blog/20.jpg" alt="" /></div>
                <div className="post-data">
                  <a href="#" className="date">25 august, 2018</a>
                  <h5 className="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" className="read-more"><i className="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
            <div className="isotop-item travel business technology">
              <div className="single-blog-post">
                <div className="img-holder"><img src="images/blog/21.jpg" alt="" /></div>
                <div className="post-data">
                  <a href="#" className="date">18 Dec, 2018</a>
                  <h5 className="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" className="read-more"><i className="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
            <div className="isotop-item business marketing">
              <div className="single-blog-post">
                <div className="img-holder"><img src="images/blog/27.jpg" alt="" /></div>
                <div className="post-data">
                  <a href="#" className="date">03 april, 2018</a>
                  <h5 className="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" className="read-more"><i className="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
            <div className="isotop-item travel economy technology">
              <div className="single-blog-post">
                <div className="img-holder"><img src="images/blog/23.jpg" alt="" /></div>
                <div className="post-data">
                  <a href="#" className="date">13 Nov, 2018</a>
                  <h5 className="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" className="read-more"><i className="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="theme-pagination-one text-center pt-15">
            <ul>
              <li><a href="#"><i className="flaticon-back-1"></i></a></li>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li>....</li>
              <li><a href="#">Last</a></li>
              <li><a href="#"><i className="flaticon-next-1"></i></a></li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Blog;
