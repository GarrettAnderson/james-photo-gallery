import React, { Component } from 'react'
import Image1 from './images/IMG_0899.png'
import Image2 from './images/IMG_1520.png'
import Image3 from './images/IMG_1566.png'
import Image4 from './images/IMG_1567.png'
import Image5 from './images/IMG_1569.png'
import Image6 from './images/IMG_1570.png'
import Image7 from './images/IMG_1571.png'
import Image8 from './images/IMG_1572.png'
import Image9 from './images/IMG_1585.png'
import Image10 from './images/IMG_1586.png'
import Image11 from './images/IMG_1587.png'
import Image12 from './images/IMG_1588.png'
import Image13 from './images/IMG_1589.png'
import Image14 from './images/IMG_1595.png'
import Image15 from './images/IMG_1603.png'
import Image16 from './images/IMG_1605.png'
import Image17 from './images/IMG_2018.png'
import Image18 from './images/IMG_2023.png'
import Image19 from './images/IMG_2039.png'
import Image20 from './images/IMG_2489.png'
import Image21 from './images/IMG_2718.png'
import Image22 from './images/IMG_2849.png'
import Image23 from './images/IMG_2851.png'
import Image24 from './images/IMG_2853.png'
import Image25 from './images/IMG_2856.png'
import Image26 from './images/IMG_2857.png'
import Image27 from './images/IMG_2858.png'
import Image28 from './images/IMG_2859.png'
import Image29 from './images/IMG_2860.png'
import Image30 from './images/IMG_2861.png'
import Image31 from './images/IMG_2863.png'
import Image32 from './images/IMG_2864.png'
import Image33 from './images/IMG_3139.png'
import Image34 from './images/IMG_6028.png'
import Image35 from './images/IMG_6312.png'
import Image36 from './images/IMG_6426.png'
import Image37 from './images/IMG_6562.png'
import Image38 from './images/IMG_7255.png'
import Image39 from './images/IMG_9556.png'
import Image40 from './images/IMG_9987.png'

const images = [
  { id: 1, image: Image1 },
  { id: 2, image: Image2 },
  { id: 3, image: Image3 },
  { id: 4, image: Image4 },
  { id: 5, image: Image5 },
  { id: 6, image: Image6 },
  { id: 7, image: Image7 },
  { id: 8, image: Image8 },
  { id: 9, image: Image9 },
  { id: 10, image: Image10 },
  { id: 11, image: Image11 },
  { id: 12, image: Image12 },
  { id: 13, image: Image13 },
  { id: 14, image: Image14 },
  { id: 15, image: Image15 },
  { id: 16, image: Image16 },
  { id: 17, image: Image17 },
  { id: 18, image: Image18 },
  { id: 19, image: Image19 },
  { id: 20, image: Image20 },
  { id: 21, image: Image21 },
  { id: 22, image: Image22 },
  { id: 23, image: Image23 },
  { id: 24, image: Image24 },
  { id: 25, image: Image25 },
  { id: 26, image: Image26 },
  { id: 27, image: Image27 },
  { id: 28, image: Image28 },
  { id: 29, image: Image29 },
  { id: 30, image: Image30 },
  { id: 31, image: Image31 },
  { id: 32, image: Image32 },
  { id: 33, image: Image33 },
  { id: 34, image: Image34 },
  { id: 35, image: Image35 },
  { id: 36, image: Image36 },
  { id: 37, image: Image37 },
  { id: 38, image: Image38 },
  { id: 39, image: Image39 },
  { id: 40, image: Image40 }
]

const imageNumbers = []

class App extends Component {
  state = {
    imageNumber: []
  }
  componentDidMount() {
    console.log(imageNumbers)
  }

  render() {
    return (
      <section className="content-container">
        <header>
          <h1>James Dean Does Other Stuff</h1>
        </header>
        <main>
          <section className="photo-gallery">
            <ol>
              {images.map((image) => {
                console.log(image.id)
                imageNumbers.push(image.id)
                return (
                  <li key={image.id}>
                    <img src={image.image} />
                    <p className={`image-number ${imageNumbers.indexOf > 8 ? 'double-digit' : ''} `}>{image.id}</p>
                  </li>
                )
              })}
            </ol>
          </section>
        </main>
      </section>
    )
  }
}

export default App
