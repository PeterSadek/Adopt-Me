import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0
  };

  static defaultProps = {
    images: ['https://pets-images.dev-apis.com/pets/none.jpg']
  };
  render() {
    this.props;
    const { images } = this.props;
    const { active } = this.state;

    return (
      <div className='carousel'>
        <img src={images[active]} alt='animal' />
        <div className='carousel-smaller'>
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt='animal thumbnail'
              className={active == index ? 'active' : ''}
              onClick={() => this.setState({ active: index })}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
