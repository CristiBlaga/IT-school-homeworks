import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import poza4 from "./poza4.jpg";
const Template2 = () => {
  return (
    <>
      <div class="container">
        <div class="row g-1 navbar">
          <div class="col">
            <div class="box">HOME</div>
          </div>
          <div class="col">
            <div class="box">ABOUT US</div>
          </div>
          <div class="col">
            <div class="box">CONTACT</div>
          </div>
          <div class="col">
            <div class="box">COMPANY</div>
          </div>
          <div class="col">
            <div class="box">SERVICES</div>
          </div>
        </div>
        <div class="row header">
          <div class="col-9">
            <span>TechCorporate</span>
          </div>
          <div class="col-3">
            <div>Mail: info@mail.com</div>
            <div>Tel: 012345678</div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="slider">
              <div class="description">
                <h2>Technologies of the future</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis fuga facere esse, aliquam similique adipisci officiis
                  placeat commodi doloremque porro. Voluptas distinctio
                  voluptates impedit in doloribus nihil aperiam ducimus
                  officiis.
                </p>
              </div>
              <div class="action">Today's Technology &raquo;</div>
            </div>
          </div>
        </div>
      </div>
      <div class="container pb-2 mb-2">
        <div class="row photos">
          <div class="col">
            <div class="card rounded-0">
              <div class="card-body">
                <h5 class="card-title text-center">Card title</h5>
                <img class="card-img-top rounded-0" src={poza4} alt="poza" />
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="read-more">
                  Read more &raquo;
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card rounded-0">
              <div class="card-body">
                <h5 class="card-title text-center">Card title</h5>
                <img class="card-img-top rounded-0" src={poza4} alt="poza" />
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="read-more">
                  Read more &raquo;
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card rounded-0">
              <div class="card-body">
                <h5 class="card-title text-center">Card title</h5>
                <img
                  class="card-img-top rounded-0 w-240 h-90"
                  src={poza4}
                  alt="Card image cap"
                />
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="read-more">
                  Read more &raquo;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="three-column d-flex"></div>
      </div>

      <div class="container">
        <div class="row d-flex">
          <div class="col-3">
            <div class="image rounded-0">
              <img
                class="card-img-left w-100 h-150"
                src={poza4}
                alt="Card image cap"
              />
            </div>
          </div>

          <div class="col-5">
            <div class="middle-column">
              <div class="middle-title">
                <strong>Definitions</strong>
              </div>

              <div class="description">
                <p>
                  Technology is the application of knowledge to reach practical
                  goals in a specifiable and reproducible way. The word
                  technology may also mean the product of such an endeavor.
                </p>

                <a href="#"> Continue reading &raquo; </a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="right-column">
              <p class="categories">Categories</p>
              <div class="list-group">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                  <li class="list-group-item">A fourth item</li>
                  <li class="list-group-item">And a fifth one</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="five-column-row">
          <div class="row g-2">
            <div class="col">
              <div class="image rounded-0">
                <img
                  class="card-img-left w-100 h-150"
                  src={poza4}
                  alt="Card image cap"
                />
              </div>
            </div>
            <div class="col">
              <div class="image rounded-0">
                <img
                  class="card-img-left w-100 h-150"
                  src={poza4}
                  alt="Card image cap"
                />
              </div>
            </div>
            <div class="col">
              <div class="image rounded-0">
                <img
                  class="card-img-left w-100 h-150"
                  src={poza4}
                  alt="Card image cap"
                />
              </div>
            </div>
            <div class="col">
              <div class="image rounded-0">
                <img
                  class="card-img-left w-100 h-150"
                  src={poza4}
                  alt="Card image cap"
                />
              </div>
            </div>
            <div class="col">
              <div class="image rounded-0">
                <img
                  class="card-img-left w-100 h-150"
                  src={poza4}
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row d-flex footer">
          <div class="col-9 align-items-start">
            <div class="p-3">Copyright © 2022 - All Rights Reserved</div>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    </>
  );
};
export default Template2;
