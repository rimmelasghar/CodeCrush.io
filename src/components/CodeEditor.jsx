import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Editor from './Editor/Editor';
import useLocalStorage from "../hooks/useLocalStorage";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function CodeEditor() {
    const getBlobURL = (code, type) => {
        const blob = new Blob([code], { type });
        return URL.createObjectURL(blob);
    };

    const htmlDefault = `<!DOCTYPE html>
    <html>
      <head>
        <title>CodeCrush.io</title>
      </head>
      <body>
        <header>
          <h1>Welcome to CodeCrush</h1>
        </header>
    
        <section>
          <div class="container">
            <p>Feel free to edit this File to preview Live changes to it</p>
            <p>Created by Rimmel Asghar with ❤
            </p>
            <button class="button">Learn More</button>
          </div>
        </section>
      </body>
    </html>`;

    const cssDefault = ` body {
        font-family: Arial, sans-serif;
   text-align:center;
        background-color: #f8f8f8;
      }
header {
        background-color: #333;
        color: #fff;
        padding: 20px;
        text-align: center;
      }

      h1 {
        font-size: 36px;
        margin: 0;
      }

      p {
        font-size: 18px;
        line-height: 1.5;
        color: #555;
        margin-bottom: 30px;
      }`;

    const jsDefault = `const button = document.querySelector('.button');
    button.addEventListener('click', function() {
      alert('Code Crsuh is Awesome');
    });`
    const [htmlVal, updateHtmlStrorage] = useLocalStorage("html", htmlDefault);
    const [cssVal, updateCssStrorage] = useLocalStorage("css", cssDefault);
    const [jsVal, updateJsStrorage] = useLocalStorage("js", jsDefault);

    const [html, updateHtml] = useState(htmlVal);
    const [css, updateCss] = useState(cssVal);
    const [js, updateJs] = useState(jsVal);

    const cssURL = getBlobURL(css, "text/css");
    const jsURL = getBlobURL(js, "text/javascript");

    const srcDoc = `
      <!DOCTYPE html>
      <html>
      <head>
      ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      </head>
        <body>${html}
        ${js && `<script src="${jsURL}"></script>`}
        </body>
      </html>`;

    useEffect(() => {
        setTimeout(() => { }, 500);
        updateHtmlStrorage(html);
        updateCssStrorage(css);
        updateJsStrorage(js);
    }, [html, css, js]);

    return (
        <div>
            <Container fluid={true} className="pane pane-top">
                <Row noGutters={true}>
                    <Col md={4} className="editor-lang">
                        <div className="editor-text">
                            <i className="fab fa-html5"> </i> Html
                        </div>
                        <Editor
                            language="xml"
                            value={html}
                            onChange={(newVal) => {
                                updateHtml(newVal);
                            }}
                        />
                    </Col>

                    <Col md={4} className="editor-lang">
                        <div className="editor-text">
                            <i className="fab fa-css3-alt"></i> Css
                        </div>
                        <Editor
                            language="css"
                            value={css}
                            onChange={(newVal) => {
                                updateCss(newVal);
                            }}
                        />
                    </Col>

                    <Col md={4} className="editor-lang">
                        <div className="editor-text">
                            <i className="fab fa-js-square"></i> Js
                        </div>
                        <Editor
                            language="javascript"
                            value={js}
                            onChange={(newVal) => {
                                updateJs(newVal);
                            }}
                        />
                    </Col>
                </Row>
            </Container>

            <Container fluid={true} className="pane pane-bottom">
                <Row noGutters={true}>
                    <iframe
                        srcDoc={srcDoc}
                        className="output-pane"
                        allowFullScreen
                    ></iframe>
                </Row>
            </Container>
        </div>
    );
}

