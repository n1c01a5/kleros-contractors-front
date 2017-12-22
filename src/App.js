import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="flex-container">
          <div className="flex-item wide system">
            <div className="flex-item-label">Desktop</div>
          </div>

          <div className="flex-item wide productivity">
            <div className="flex-item-label">
              Mail
            </div>
          </div>

          <div className="flex-item wide social">
            <div className="flex-item-label">
              People
            </div>
          </div>

          <div className="flex-item wide utility">
            <div className="flex-item-label">
              Weather
            </div>
          </div>

          <div className="flex-item wide fun">
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

          <div className="flex-item wide productivity">
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
              justify
          }

          .flex-item {
              padding: 10px;
              position: relative;
          }

          .wide {
              height: 80px;
              min-width: 300px;
              flex:1;
          }


          .footer {
            flex: 1;
            background: red;
            min-height: 80px;
          }

          .system {
              background: #1e7983;
          }

          .utility {
              background: #2776ec;
          }

          .apps {
              background: #00566b;
          }

          .media {
              background: #ad193e;
          }

          .productivity {
              background: #008b17;
          }

          .social {
              background: #d54c28;
          }

          .fun {
              background: #5c39b7;
          }

          .games {
            background: #63ae1b;
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
