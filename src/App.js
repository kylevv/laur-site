import React, { Component } from 'react'
import AWS from 'aws-sdk'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import './App.scss'
const Bucket = 'laur-jewelry-photos'
const Prefix = 'raw/'
const baseUrl = 'http://photos.vanvleck.com'

AWS.config.region = 'us-east-1'
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:4bf908fa-88f0-4793-a819-cf1e558097c3'
})

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { photoKeys: [] }
  }

  componentDidMount () {
    const s3 = new AWS.S3({
      params: { Bucket, Prefix }
    })
    s3.listObjects({}, (err, data) => {
      if (err) {
        console.log('ERR:', err)
      } else {
        console.log('DATA:', data)
        this.setState((prevState) => {
          const photoKeys = data.Contents.map((result) => result.Key.replace(Prefix, '')).filter((key) => !!key)
          return { photoKeys }
        })
      }
    })
  }

  render () {
    const images = this.state.photoKeys.map((photoKey) => {
      let srcFull = `${baseUrl}/1440x960/${photoKey}`
      let srcThumb = `${baseUrl}/150x100/${photoKey}`
      return { original: srcFull, thumbnail: srcThumb }
    })
    return (
      <div>
        <h1>Laur Site</h1>
        {images.length &&
          <ImageGallery items={images} thumbnailPosition='bottom' />
        }
      </div>
    )
  }
}

export default App
