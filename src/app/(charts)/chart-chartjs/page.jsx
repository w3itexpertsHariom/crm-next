"use client"
import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import PageTitle from "@/layouts/PageTitle";
import BarChart1 from "@/components/chartjs/bar1";
import BarChart5 from "@/components/chartjs/bar5";
import BarChart6 from "@/components/chartjs/bar6";
import LineChart1 from "@/components/chartjs/line1";
import DualLine from "@/components/chartjs/dualLine";
import BasicArea from "@/components/chartjs/basicArea";
import GradientArea from "@/components/chartjs/gradinetArea";
import DualArea from "@/components/chartjs/dualArea";
import PolarChart from "@/components/chartjs/polar";
import ChartPie from "@/components/chartjs/pie";

function ChartChartjs() {
  return (
    <>
      <PageTitle motherMenu="Charts" activeMenu="ChartJs" />
      <div className="container-fluid">
        <Row>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title">Bar chart</h4>
                </Card.Header>
                <Card.Body>
                  <BarChart1 />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title">Bar chart</h4>
                </Card.Header>
                <Card.Body>
                  <BarChart5 />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title">Bar chart</h4>
                </Card.Header>
                <Card.Body>
                  <BarChart6 />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title">Line chart</h4>
                </Card.Header>
                <Card.Body>
                  <LineChart1 />
                </Card.Body>
              </Card>
            </Col> 
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title">Dual Line chart</h4>
                </Card.Header>
                <Card.Body>
                  <DualLine />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title">Basic Area Chart</h4>
                </Card.Header>
                <Card.Body>
                  <BasicArea />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title">Gradinet Area Chart</h4>
                </Card.Header>
                <Card.Body>
                  <GradientArea />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title">Dual Area Chart</h4>
                </Card.Header>
                <Card.Body>
                  <DualArea />
                </Card.Body>
              </Card>
            </Col>

            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title">Pie</h4>
                </Card.Header>
                <Card.Body>
                  <ChartPie />
                </Card.Body>
              </Card>
            </Col>

            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                    <h4 className="card-title">Polar Chart</h4>
                </Card.Header>
                <Card.Body>
                  <PolarChart />
                </Card.Body>
              </Card>
            </Col>  
          </Row>
        </div>
    </>
  );
}

export default ChartChartjs;
