"use client"

import React, { Component } from "react";
import NTable from "@/components/plugins/nestable/NTable";
import NTable2 from "@/components/plugins/nestable/NTable2";

import PageTitle from "@/layouts/PageTitle";

class Nestable extends Component {
  render() {
    return (
      <div className="h-80">
        <PageTitle
          activeMenu="Advanced"
          motherMenu="Nestable"
          pageContent="Nestable"
        />
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Nestable</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card-content">
                          <div className="nestable">
                            <div className="dd" id="nestable">
                              <ol className="dd-list">
                                <li className="dd-item nest_style" data-id="1">
                                  <NTable />
                                </li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card-content">
                          <div className="nestable">
                            <div className="dd" id="nestable2">
                              <ol className="dd-list">
                                <li className="dd-item nest_style" data-id="13">
                                  <NTable2 />
                                </li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Nestable;
