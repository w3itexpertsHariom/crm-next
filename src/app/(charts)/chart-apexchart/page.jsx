"use client"
import React from "react";
import loadable from "@loadable/component";
import { Row, Col, Card } from "react-bootstrap";

import pMinDelay from "p-min-delay";

import PageTitle from "@/layouts/PageTitle";

const ApexBar2 = loadable(() => pMinDelay(import("@/components/apexchart/Bar2"), 1000));
const ApexBar3 = loadable(() => pMinDelay(import("@/components/apexchart/Bar3"), 1000));
const ApexRedialBar = loadable(() => pMinDelay(import("@/components/apexchart/RadialBar"), 1000));
const ApexLine = loadable(() => pMinDelay(import("@/components/apexchart/Line5"), 1000));
const ApexLine3 = loadable(() => pMinDelay(import("@/components/apexchart/Line3"), 1000));
const ApexLine4 = loadable(() => pMinDelay(import("@/components/apexchart/Line4"), 1000));
const ApexPie = loadable(() => pMinDelay(import("@/components/apexchart/Pie4"), 1000));
const ApexPie5 = loadable(() => pMinDelay(import("@/components/apexchart/Pie5"), 1000));

function ApexChart() {
  return (
    <div className="h-80">
      <PageTitle motherMenu="Charts" activeMenu="ApexChart" />
      <div className="container-fluid">
        <Row>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Bar Chart</h4>
              </Card.Header>
              <Card.Body>
                <ApexBar2 />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Bar Chart</h4>
              </Card.Header>
              <Card.Body>
                <ApexBar3 />
              </Card.Body>
            </Card>
          </Col>

          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Line</h4>
              </Card.Header>
              <Card.Body>
                <ApexLine />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header> 
                <h4 className="card-title">Line</h4>
              </Card.Header>
              <Card.Body>
                <ApexLine3 />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Line</h4>
              </Card.Header>
              <Card.Body>
                <ApexLine4 />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Pie</h4>
              </Card.Header>
              <Card.Body className="mt-5">
                <ApexPie />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Pie</h4>
              </Card.Header>
              <Card.Body>
                <ApexPie5 />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Redial Bar</h4>
              </Card.Header>
              <Card.Body>
                <ApexRedialBar />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ApexChart;
