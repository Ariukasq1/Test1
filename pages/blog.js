import React,{Component} from 'react';
import Layout from '../components/Layout';

class Blog extends Component {
  render() {
    return (
      <Layout>
        <div class="our-blog blog-filer mb-150">
          <div class="blog-filter-title">
            <p class="upper-title">Our News</p>
            <h2 class="main-title">Our inside stories <br/> for you</h2>
          </div>

          <ul class="isotop-menu-wrapper blog-filter-nav clearfix">
            <li class="is-checked" data-filter="*"><span>All</span></li>
            <li data-filter=".travel"><span>Travel</span></li>
            <li data-filter=".economy"><span>Economy</span></li>
            <li data-filter=".business"><span>Business</span></li>
            <li data-filter=".marketing"><span>Marketing</span></li>
            <li data-filter=".technology"><span>Technology</span></li>
          </ul>

          <div class="masnory-blog-wrapper">
            <div class="grid-sizer"></div>
            <div class="isotop-item economy marketing">
              <div class="single-blog-post">
                <div class="img-holder"><img src="images/blog/16.jpg" alt="" /></div>
                <div class="post-data">
                  <a href="#" class="date">23 July, 2018</a>
                  <h5 class="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" class="read-more"><i class="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
            <div class="isotop-item economy">
              <div class="single-blog-post">
                <div class="img-holder"><img src="images/blog/17.jpg" alt="" /></div>
                <div class="post-data">
                  <a href="#" class="date">15 march, 2018</a>
                  <h5 class="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" class="read-more"><i class="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
            <div class="isotop-item travel marketing">
              <div class="single-blog-post">
                <div class="img-holder"><img src="images/blog/18.jpg" alt="" /></div>
                <div class="post-data">
                  <a href="#" class="date">05 July, 2018</a>
                  <h5 class="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" class="read-more"><i class="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
            <div class="isotop-item travel economy technology">
              <div class="single-blog-post">
                <div class="img-holder"><img src="images/blog/19.jpg" alt="" /></div>
                <div class="post-data">
                  <a href="#" class="date">11 june, 2018</a>
                  <h5 class="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" class="read-more"><i class="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
            <div class="isotop-item economy marketing">
              <div class="single-blog-post">
                <div class="img-holder"><img src="images/blog/20.jpg" alt="" /></div>
                <div class="post-data">
                  <a href="#" class="date">25 august, 2018</a>
                  <h5 class="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" class="read-more"><i class="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
            <div class="isotop-item travel business technology">
              <div class="single-blog-post">
                <div class="img-holder"><img src="images/blog/21.jpg" alt="" /></div>
                <div class="post-data">
                  <a href="#" class="date">18 Dec, 2018</a>
                  <h5 class="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" class="read-more"><i class="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
            <div class="isotop-item business marketing">
              <div class="single-blog-post">
                <div class="img-holder"><img src="images/blog/27.jpg" alt="" /></div>
                <div class="post-data">
                  <a href="#" class="date">03 april, 2018</a>
                  <h5 class="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" class="read-more"><i class="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
            <div class="isotop-item travel economy technology">
              <div class="single-blog-post">
                <div class="img-holder"><img src="images/blog/23.jpg" alt="" /></div>
                <div class="post-data">
                  <a href="#" class="date">13 Nov, 2018</a>
                  <h5 class="blog-title-one title"><a href="/blog-details">Challange yourself and win the future.</a></h5>
                  <p>This response is important for our ability to learn from mistakes, but it In other words…</p>
                  <a href="/blog-details" class="read-more"><i class="flaticon-next-1"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="theme-pagination-one text-center pt-15">
            <ul>
              <li><a href="#"><i class="flaticon-back-1"></i></a></li>
              <li class="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li>....</li>
              <li><a href="#">Last</a></li>
              <li><a href="#"><i class="flaticon-next-1"></i></a></li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Blog;
