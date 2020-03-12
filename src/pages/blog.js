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

  renderCategory = (categories) => {
    return categories.map(cat => {
      return `isotop-item ${cat.name}`
    })
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
            <li data-filter=".Маркетинг"><span>Маркетинг</span></li>
            <li data-filter=".Технологи"><span>Технологи</span></li>
            <li data-filter=".Борлуулалт"><span>Борлуулалт</span></li>
            <li data-filter=".Зөвлөмж"><span>Зөвлөмж</span></li>
            <li data-filter=".Шинэчлэл"><span>Шинэчлэл</span></li>
          </ul>

          <div className="masnory-blog-wrapper">
            <div className="grid-sizer"></div>
            {posts.map(post=> {
              return (
                <div key={post.slug} className={this.renderCategory(getData(post._embedded, 'categories'))}>
                  <div className="single-blog-post">
                    <div className="img-holder"><img src={getData(post._embedded, 'image')} alt="" /></div>
                    <div className="post-data blog-home">
                      <span className="date">{moment(post.date).format('L')}</span>
                      <h5 className="blog-title-one title">
                        <Link href={prefixer("/blog/" + post.slug)}>
                          <a>{post.title.rendered}</a>
                        </Link>
                      </h5>
                      <div dangerouslySetInnerHTML={{ __html: (post.excerpt.rendered).slice(0,150) }} />
                      <Link href={prefixer("/blog/" + post.slug)}><a className="read-more"><i className="flaticon-next-1"></i></a></Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Blog;
