import React, { Component } from 'react';
import Blockies from 'react-blockies';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="flex-container">
          <div className="flex-item wide contract grow">
            <div className="type">
              Profile
            </div>
            <Blockies
              seed="Jeremy"
              size={10}
              scale={14}
              color='#dfe'
              bgcolor='#aaa'
              spotcolor='#000'
            />
            <div className="content">
              0x4d010...87f
            </div>
          </div>

          <div className="flex-item wide utility grow">
            <Blockies
              seed="Jeremy"
              size={10}
              scale={14}
              color='#dfe'
              bgcolor='#aaa'
              spotcolor='#000'
            />
          </div>

          <div className="flex-item wide apps grow">
            <Blockies
              seed="ewfwef"
              size={10}
              scale={14}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide media grow">
            <Blockies
              seed="Jere[pdemy"
              size={10}
              scale={14}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide media">
            <Blockies
              seed="Jewderemy"
              size={10}
              scale={14}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide utility">
            <Blockies
              seed="Jerwdwdemy"
              size={10}
              scale={14}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide media">
            <Blockies
              seed="Jere[pdemy"
              size={10}
              scale={14}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide calendar">
            <Blockies
              seed="Jere[pdemy"
              size={10}
              scale={14}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide games">
            <Blockies
              seed="Jere[pdemy"
              size={10}
              scale={14}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide utility">
            <Blockies
              seed="Jere[pdemy"
              size={10}
              scale={14}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide fun">
            <Blockies
              seed="Jere[pdemy"
              size={10}
              scale={14}
              bgColor="#fff"
            />
          </div>

          <div className="flex-item wide apps">
            <Blockies
              seed="Jere[pdemy"
              size={10}
              scale={14}
              bgColor="#fff"
            />
          </div>
        </div>

        <div className="footer">
          Footer
        </div>

        <style jsx>{`
          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
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
            margin: 7px;
            padding: 10px;
            position: relative;
          }

          .wide {
            flex:1;
            min-width: 400px;
          }

          .grow
          {
            -webkit-transition: all 200ms ease-in;
            -webkit-transform: scale(1);
            -ms-transition: all 200ms ease-in;
            -ms-transform: scale(1);
            -moz-transition: all 200ms ease-in;
            -moz-transform: scale(1);
            transition: all 200ms ease-in;
            transform: scale(1);
            cursor: pointer;
          }
          .grow:hover
          {
            z-index: 2;
            -webkit-transition: all 200ms ease-in;
            -webkit-transform: scale(1.02);
            -ms-transition: all 200ms ease-in;
            -ms-transform: scale(1.02);
            -moz-transition: all 200ms ease-in;
            -moz-transform: scale(1.02);
            transition: all 200ms ease-in;
            transform: scale(1.02);
          }

          .type {
            padding: 5px 10px;
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
