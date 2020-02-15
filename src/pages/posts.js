import axios from 'axios';
import React, { Component } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import '../style/css/custom.css';
import '../style/css/responsive.css';
import '../style/fonts/font-awesome/css/font-awesome.css';
export default class extends Component{
  static async getInitialProps(){
    //request for posts from wp
    const response = await axios.get('https://erxes.io/blog_wp/wp-json/wp/v2/posts');
    return {
      posts: response.data
    }
  }
  render(){
    const { posts } = this.props;
    console.log(posts)
    return(
      <Layout>
        <h1>Posts</h1>
        <ul>
          {
            posts.map( post => {
              return (
                <li key={post.id}>
                  <Link href={`/posts/${post.slug}`}>
                    <a>
                      <h1>{post.title.rendered}</h1>
                      <article
                        className="entry-content"
                        dangerouslySetInnerHTML={{
                          __html: post.content.rendered
                        }}
                      />
                    </a>
                  </Link>
                  <p>{post.categories}</p>
                </li>
              );
            })
          }
        </ul>
      </Layout>
    )
  }
} 