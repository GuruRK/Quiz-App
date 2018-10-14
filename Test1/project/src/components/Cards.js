import React, { Component } from "react";
import {
  Card,
  Fa,
  CardTitle,
  Button,
  CardBody,
  CardImage,
  CardText
} from "mdbreact";

class Cards extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="d-inline-flex p-2">
          <Card
            style={{}}
            className="card-image"
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-4 px-4">
              <div>
                <h5 className="orange-text">
                  <Fa icon="pie-chart" /> Solve
                </h5>
                <CardTitle tag="h3" className="pt-2">
                  <strong>Arithematic</strong>
                </CardTitle>
                <p>
                  Life isn't about algebra and geometry. Learning by making
                  mistakes and not duplicating them is what life is about.
                  Arithmetic! Algebra! Geometry! Grandiose trinity! Luminous
                  triangle! Whoever has not known you is without sense! you,
                  there is no such thing as algebra.
                </p>
                <Button color="orange">
                  <Fa icon="fa fa-book" /> Take Quiz
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="d-inline-flex p-2">
          <Card
            className="card-image"
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')"
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-4 px-4">
              <div>
                <h5 className="orange-text">
                  <Fa icon="pie-chart" />Solve
                </h5>
                <CardTitle tag="h3" className="pt-2">
                  <strong>Algebra</strong>
                </CardTitle>
                <p>
                  Arithmetic! Algebra! Geometry! Grandiose trinity! Luminous
                  triangle! Whoever has not known you is without sense! you,
                  there is no such thing as algebra.
                </p>
                <Button color="orange">
                  <Fa icon="fa fa-book" /> Take Quiz
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="d-inline-flex p-2">
          <Card
            style={{}}
            className="card-image"
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-4 px-4">
              <div>
                <h5 className="pink-text">
                  <Fa icon="pie-chart" /> Solve
                </h5>
                <CardTitle tag="h3" className="pt-2">
                  <strong>Fun-Question</strong>
                </CardTitle>
                <p>
                  Life isn't about algebra and geometry. Learning by making
                  mistakes and not duplicating them is what life is about.
                  Arithmetic! Algebra! Geometry! Grandiose trinity! Luminous
                  triangle! Whoever has not known you is without sense! you,
                  there is no such thing as algebra.
                </p>
                <Button color="pink">
                  <Fa icon="fa fa-book" /> Take Quiz
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Cards;
