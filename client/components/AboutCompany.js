import React, { Component } from 'react';

export default class AboutCompany extends Component {
  render() {
    return (
      <section id="carousel">
        <div id="carousel-text">
          <h1 id = 'companyBanner'>Ray's Kitchen</h1>
          <h2 className="logosale">Get 14 Free Meals + free shipping</h2>
        </div>
        <img className="carousel-image" src="/images/raysfoodbanner.jpeg" />
      </section>
    );
  }
}
