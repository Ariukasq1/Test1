import React from "react";
import {
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from "react-share";

class Share extends React.Component {
  render() {
    const { vertical, path, title = '' } = this.props;

    return (
      <div className={`share-container${vertical ? ' vertical' : ''}`}>
        <EmailShareButton title={title} url={path} >
          <EmailIcon size={38} bgStyle={{ fill: "#fff"}} iconFillColor="#d3d3d3" round={true} />
        </EmailShareButton>
        <FacebookShareButton title={title} url={path} >
          <FacebookIcon size={38} bgStyle={{ fill: "#fff"}} iconFillColor="#d3d3d3" round={true} />
        </FacebookShareButton>
        <LinkedinShareButton title={title} url={path} >
          <LinkedinIcon size={38} bgStyle={{ fill: "#fff"}} iconFillColor="#d3d3d3" round={true} />
        </LinkedinShareButton>
        <TwitterShareButton title={title} url={path} >
          <TwitterIcon size={38} bgStyle={{ fill: "#fff"}} iconFillColor="#d3d3d3" round={true} />
        </TwitterShareButton>
      </div>
    );
  }
}

export default Share;
