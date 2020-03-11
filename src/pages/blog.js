import WPAPI from 'wpapi';
import React, {Component} from 'react';
import Layout from '../components/Layout';
import Config from "../config";
import { prefixer, getData } from "../utils"
import Link from "next/link";
import moment from "moment";

const wp = new WPAPI({ endpoint: Config.apiUrl });

class Blog extends Component {
  static async getInitialProps() {
    const posts = await wp
      .posts()
      .perPage(40)
      .embed();

    return { posts };
  }

  render() {
    const { posts } = this.props;

    return (
      <Layout>
        <div className="our-blog blog-filer mb-150">
          <div className="blog-filter-title">
            <p className="upper-title">Блог</p>
            <h2 className="main-title">Бидний тухай мэдээ, мэдээлэл<br/> бүрийг эндээс</h2>
          </div>

          <ul className="isotop-menu-wrapper blog-filter-nav clearfix">
            <li className="is-checked" data-filter="*"><span>Бүгд</span></li>
            <li data-filter=".marketing"><span>Маркетинг</span></li>
            <li data-filter=".technology"><span>Технологи</span></li>
            <li data-filter=".sales"><span>Борлуулалт</span></li>
            <li data-filter=".advice"><span>Зөвлөмж</span></li>
            <li data-filter=".new"><span>Шинэчлэл</span></li>
          </ul>

          <div className="masnory-blog-wrapper">
            <div className="grid-sizer"></div>
            {posts.map(post=> (
              <div key={post.slug} className="isotop-item economy marketing travel">
                <div className="single-blog-post">
                  <div className="img-holder"><img src={getData(post._embedded, 'image')} alt="" /></div>
                  <div className="post-data">
                    <a href="#" className="date">{moment(post.date).format('L')}</a>
                    <h5 className="blog-title-one title">
                      <Link href={prefixer("/blog/" + post.slug)}>
                        <a>{post.title.rendered}</a>
                      </Link>
                    </h5>
                    <div dangerouslySetInnerHTML={{ __html: (post.excerpt.rendered) }} />
                    <Link href={prefixer("/blog/" + post.slug)}><a className="read-more"><i className="flaticon-next-1"></i></a></Link>
                  </div>
                </div>
              </div>
            ))}
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
