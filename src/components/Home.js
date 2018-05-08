import React, { Component } from 'react';


class Home extends Component {
    render () {
        return (
            <div>
                <h1>Homepage</h1>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel"/>
                  <div class="carousel-inner"/>
                    <div class="carousel-item active"/>
                      <img class="d-block w-100" src={('./images/barimage.jpg')} alt="First slide"/>
                    <div class="carousel-item"/>
                      <img class="d-block w-100" src={('./images/garnisheddrink.jpg')} alt="Second slide"/>
                    <div class="carousel-item"/>
                      <img class="d-block w-100" src={('./images/relax.jpg')} alt="Third slide"/>
            </div>
        )
    }
}

export default Home;
