import Head from 'next/head';
import Layout from '../components/Layout';
import React, { Component } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
export default class extends Component {
  static async getInitialProps( context ) {
    const slug = context.query.slug

    const response = await axios.get(`http://erxes/wp-json/wp/v2/posts?slug=${slug}`);

    return {
      post: response.data[0]
    }
  }

  
  render(){
    const { post } = this.props;
    return (
      <Layout>
        <Head>
          <title>{post.title.rendered}</title>
          <meta name="description" content="Description text" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:title" content={post.title.rendered} />
          <meta
            property="og:image"
            content="https://davidwalsh.name/wp-content/themes/klass/img/facebooklogo.png"
          />
          <meta property="og:site_name" content="David Walsh Blog" />
          <meta property="og:description" content={post.excerpt.rendered} />
        </Head>
        <h1>{post.title.rendered}</h1>

        <article
          className="entry-content"
          dangerouslySetInnerHTML={{
            __html: post.content.rendered
          }}
        />
      </Layout>
    );
  }
}