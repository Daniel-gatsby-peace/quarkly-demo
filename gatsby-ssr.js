
const React = require("react");
const QAPI = require("./qapi").default;

export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    }
) => {
  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto%20Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open%20Sans%20Condensed:ital,wght@0,300;0,700;1,300&display=swap" />,
  ]);

  setPostBodyComponents([
        <script
            key="QAPI"
            dangerouslySetInnerHTML={{
                __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
            }}
        />,
  ]);
}
