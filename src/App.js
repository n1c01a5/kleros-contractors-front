import React, { Component } from 'react';
import Blockies from 'react-blockies';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="flex-container">
          <div className="flex-item wide contract">
            <Blockies
              seed="Jeremy"
              size={15}
              scale={10}
              color='#dfe'
              bgcolor='#aaa'
              spotcolor='#000'
            />
          </div>

          <div className="flex-item wide utility">
            <Blockies
              seed="ewfwer"
              size={15}
              scale={10}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide apps">
            <Blockies
              seed="ewfwef"
              size={15}
              scale={10}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide media">
            <Blockies
              seed="Jere[pdemy"
              size={15}
              scale={10}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide media">
            <Blockies
              seed="Jewderemy"
              size={15}
              scale={10}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide utility">
            <Blockies
              seed="Jerwdwdemy"
              size={15}
              scale={10}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide media">
            <Blockies
              seed="Jere[pdemy"
              size={15}
              scale={10}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide calendar">
            <Blockies
              seed="Jere[pdemy"
              size={15}
              scale={10}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide games">
            <Blockies
              seed="Jere[pdemy"
              size={15}
              scale={10}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide utility">
            <Blockies
              seed="Jere[pdemy"
              size={15}
              scale={10}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide fun">
            <Blockies
              seed="Jere[pdemy"
              size={15}
              scale={10}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide apps">
            <Blockies
              seed="Jere[pdemy"
              size={15}
              scale={10}
              bgColor="#fff"
            />
          </div>
        </div>

        <div className="footer">
          Footer
        </div>

        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            background: #000;
          }

          .flex-container {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            box-sizing: border-box;
            border: 7px solid #fff;
          }

          .flex-item {
            box-sizing: border-box;
            border: 7px solid #fff;
            padding: 10px;
            position: relative;
          }

          .wide {
            flex:1;
            min-width: 400px;
          }

          .identicon {
            border-radius: 10px;
          }

          .footer {
            flex: 1;
            background: #f4f4f4;
            min-height: 70px;
          }

          .contract {
              background: #00aba9;
          }

          .utility {
              background: #2e7bcc;
          }

          .apps {
              background: #f39c12;
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

        `}</style>
      </div>
    );
  }
}

export default App;
