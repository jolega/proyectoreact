import React from "react";
import PropTypes from "prop-types";

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents,
  body,
}) {
  const embedChat = `
  window.__lc = window.__lc || {};
  window.__lc.license = 13142085;
  ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
  `;
  return (
    <html lang="en" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){ var s = document.createElement('script'), e = ! document.body ? document.querySelector('head') : document.body; s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; s.onload = function(){ acsbJS.init({ statementLink : '', footerHtml : 'WAS powered by Blossom', hideMobile : false, hideTrigger : false, language : 'en', position : 'left', leadColor : '#3435a0', triggerColor : '#3435a0', triggerRadius : '50%', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerIcon : 'people', triggerSize : 'medium', triggerOffsetX : 20, triggerOffsetY : 20, mobile : { triggerSize : 'small', triggerPositionX : 'right', triggerPositionY : 'center', triggerOffsetX : 10, triggerOffsetY : 0, triggerRadius : '50%' } }); }; e.appendChild(s);}());`,
          }}
        />
        {/* <!-- Start of LiveChat (www.livechatinc.com) code --> */}
        <script dangerouslySetInnerHTML={{ __html: embedChat }} />
        <noscript>
          <a href="https://www.livechatinc.com/chat-with/13142085/" rel="nofollow">
            Chat with us
          </a>
          , powered by{" "}
          <a
            href="https://www.livechatinc.com/?welcome"
            rel="noopener nofollow noreferrer"
            target="_blank"
          >
            LiveChat
          </a>
        </noscript>
        {/* <!-- End of LiveChat code --> */}
      </body>
    </html>
  );
}