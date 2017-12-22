import React, { Component } from 'react';
import Blockies from 'react-blockies';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="flex-container">
          <div className="flex-item wide contract">
            <div className="type">
              Profile
            </div>
            <Blockies
              seed="Jeremy"
              size={15}
              scale={10}
              color='#dfe'
              bgcolor='#aaa'
              spotcolor='#000'
            />
            <div className="content">
              0x4d010...87f
            </div>
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
            font-family: 'Open Sans Condensed', sans-serif;
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
            display: flex;
            flex-direction: row;
            box-sizing: border-box;
            border: 7px solid #fff;
            padding: 10px;
            position: relative;
          }

          .wide {
            flex:1;
            min-width: 400px;
          }

          .type {
            padding: 5px 15px;
            position: absolute;
            top: 0;
            right: 0;
            background: #fff;
            border: 1px solid lightgray;
            border-left-color: #00aba9;
            border-bottom-color: #00aba9;
            border-bottom-left-radius: 10px;
            color: gray;
          }

          .identicon {
            border-radius: 10px;
          }

          .content {
            position: relative;
            font-family: 'Open Sans Condensed', sans-serif;
            font-size: 40px;
            padding-left: 10px;
            top: -12px;
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
