import React from "react";
import {
  galleryImg1,
  galleryImg10,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
  galleryImg7,
  galleryImg8,
  galleryImg9,
} from "../../assets";
import "./gallery.css";

const imgUrls = [
  {
    url: galleryImg1,
    title: "Afrange Home",
  },
  {
    url: galleryImg2,
    title: "Afrange Home",
  },
  {
    url: galleryImg3,
    title: "Afrange Home",
  },
  {
    url: galleryImg4,
    title: "Afrange Home",
  },
  {
    url: galleryImg5,
    title: "Afrange Home",
  },
  {
    url: galleryImg6,
    title: "Afrange Home",
  },
  {
    url: galleryImg7,
    title: "Afrange Home",
  },
  {
    url: galleryImg8,
    title: "Afrange Home",
  },
  {
    url: galleryImg9,
    title: "Afrange Home",
  },
  {
    url: galleryImg10,
    title: "Afrange Home",
  },
];

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return (
      <div
        className="image-container"
        onClick={(e) => this.openModal(e, index)}
      >
        <img src={`${src.url}`} key={src} alt="gallery item" />
      </div>
    );
  }
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  closeModal(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }
  findPrev(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  }
  findNext(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  }
  render() {
    return (
      <div className="gallery-container">
        <h1>
          Our <em>Gallery</em>
        </h1>
        <div className="gallery-grid">
          {imgUrls.map(this.renderImageContent)}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 < imgUrls.length}
          src={imgUrls[this.state.currentIndex]?.url}
        />
      </div>
    );
  }
}

class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.body.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27) this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev) this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext) this.props.findNext();
  }
  render() {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src } =
      this.props;
    if (!src) {
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div isOpen={!!src} className="modal">
          <div className="modal-body">
            <button
              className="modal-close"
              onClick={closeModal}
              onKeyDown={this.handleKeyDown}
            >
              &times;
            </button>
            {hasPrev && (
              <button
                className="modal-prev"
                onClick={findPrev}
                onKeyDown={this.handleKeyDown}
              >
                &lsaquo;
              </button>
            )}
            {hasNext && (
              <button
                className="modal-next"
                onClick={findNext}
                onKeyDown={this.handleKeyDown}
              >
                &rsaquo;
              </button>
            )}
            <img src={src} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export { Gallery };
