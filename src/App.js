import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="flex-container">
          <div className="flex-item wide contract">
            <div className="flex-item-label">Desktop</div>
          </div>

          <div className="flex-item wide utility">
            <div className="flex-item-label">
              Mail
            </div>
          </div>

          <div className="flex-item wide apps">
            <div className="flex-item-label">
              People
            </div>
          </div>

          <div className="flex-item wide media">
            <div className="flex-item-label">
              Weather
            </div>
          </div>

          <div className="flex-item wide media">
            <div className="flex-item-label">
              Maps
            </div>
          </div>

          <div className="flex-item wide utility">
            <div className="flex-item-label">
              Store
            </div>
          </div>

          <div className="flex-item wide media">
            <div className="flex-item-label">
              Photos
            </div>
          </div>

          <div className="flex-item wide calendar">
            <div className="flex-item-label">
              Calendar
            </div>
          </div>

          <div className="flex-item wide games">
            <div className="flex-item-label">
              Games
            </div>
          </div>

          <div className="flex-item wide utility">
            <div className="flex-item-label">
              Web Browser
            </div>
          </div>

          <div className="flex-item wide fun">
            <div className="flex-item-label">
              Music
            </div>
          </div>

          <div className="flex-item wide apps">
            <div className="flex-item-label">
              App
            </div>
          </div>
        </div>

        <div className="footer ">
          Footer
        </div>

        <style jsx>{`
          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .flex-container {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            box-sizing: border-box;
            border: 8px solid #fff;

          }

          .flex-item {
            box-sizing: border-box;
            border: 8px solid #fff;
            padding: 10px;
            position: relative;
          }

          .wide {
            flex:1;
            height: 170px;
            min-width: 300px;
          }

          .footer {
            flex: 1;
            background: #f4f4f4;
            min-height: 80px;
          }

          .contract {
              background: #f4f4f4;
          }

          .utility {
              background: #a1c9ff;
          }

          .apps {
              background: lightgray;
          }

          .media {
              background: #e7dfdd;
          }

          .profile {
              background: #fffa7a;
          }

          .social {
              background: #fffa7a;
          }

          .fun {
              background: #fffa7a;
          }

          .games {
            background: #c1a7f3;
          }

          .calendar {
            background: #f4f4f4;
          }

          .flex-item-label {
            position: absolute;
            bottom: 8px;
            left: 15px;
          }

        `}</style>
      </div>
    );
  }
}

export default App;
