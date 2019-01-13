import React, { Component } from 'react'
import AWS from '../util/aws'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'

const s3 = new AWS.S3()
const Bucket = 'laur-jewelry-photos'
const baseUrl = 'http://photos.vanvleck.com'

class Gallery extends Component {
  constructor (props) {
    super(props)
    this.state = { photoKeys: [] }
  }

  componentDidMount () {
    const path = this.props.match.path
    s3.listObjects({ Bucket, Prefix: `raw${path}/` }).promise()
      .then((data) => {
        console.log('DATA:', data)
        const photoKeys = data.Contents
          .map((result) => result.Key.replace('raw/', '').replace(/\.[^.]+$/, '.jpg'))
          .filter((key) => !!key && key.endsWith('.jpg'))
        this.setState((prevState) => {
          return { photoKeys }
        })
      })
      .catch((err) => {
        console.log('ERR:', err)
      })
  }

  render () {
    const images = this.state.photoKeys.map((photoKey) => {
      let srcFull = `${baseUrl}/1440x960/${photoKey}`
      let srcThumb = `${baseUrl}/150x100/${photoKey}`
      return { original: srcFull, thumbnail: srcThumb }
    })
    return (
      <main className='gallery'>
        {!!images.length &&
          <ImageGallery items={images} thumbnailPosition='bottom' lazyLoad />
        }
      </main>
    )
  }
}

export default Gallery
