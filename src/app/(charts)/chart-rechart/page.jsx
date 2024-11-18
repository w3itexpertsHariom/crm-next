"use client"
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import PageTitle from "@/layouts/PageTitle";

import BarChartNoPadding from "@/components/rechart/BarChartNoPadding";
import NagetivePositive from "@/components/rechart/PositiveNagative2";
import TinyLineChart from "@/components/rechart/TinyLineChart";
import LegendEffectOpacity from "@/components/rechart/LegendEffectOpacity";

function RechartJs() {
  return (
    <>
      <PageTitle motherMenu="Charts" activeMenu="ReChartJs" />
      <div className="container-fluid">
          <Row>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                <h4 className="card-title">Bar</h4>
                </Card.Header>
                <Card.Body>
                  <BarChartNoPadding />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title">Bar</h4>
                </Card.Header>
                <Card.Body>
                  <NagetivePositive />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title">Line</h4>
                </Card.Header>
                <Card.Body>
                  <TinyLineChart />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title">Line</h4>
                </Card.Header>
                <Card.Body>
                  <LegendEffectOpacity />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
    </>
  );
}

export default RechartJs;
