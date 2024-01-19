(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{348:function(a,t,s){"use strict";s.r(t);var r=s(14),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"http基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http基础"}},[a._v("#")]),a._v(" HTTP基础")]),a._v(" "),t("p",[a._v("HTTP(Hyper Text Transfer Protocol 超文本传输协议)是一个简单的请求-响应协议，是客户端和服务端传输文字、图片、音频等超文本数据的约定和规范。它通常运行在 TCP 之上。它指定了客户端可能发送给服务器什么样的消息以及得到什么样的响应。")]),a._v(" "),t("h2",{attrs:{id:"_1、报文结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、报文结构"}},[a._v("#")]),a._v(" 1、报文结构")]),a._v(" "),t("p",[a._v("HTTP 报文基本结构为")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("起始行 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" 头部 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" 空行 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" 实体\n")])])]),t("h3",{attrs:{id:"起始行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#起始行"}},[a._v("#")]),a._v(" 起始行")]),a._v(" "),t("h4",{attrs:{id:"请求报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求报文"}},[a._v("#")]),a._v(" 请求报文")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("GET")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("home "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("HTTP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),a._v("\n")])])]),t("p",[a._v("方法 + 路径 + http版本")]),a._v(" "),t("h4",{attrs:{id:"响应报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#响应报文"}},[a._v("#")]),a._v(" 响应报文")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("HTTP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("OK")]),a._v("\n")])])]),t("p",[a._v("http版本 + 状态码 + 状态码描述")]),a._v(" "),t("h2",{attrs:{id:"_2、url结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、url结构"}},[a._v("#")]),a._v(" 2、URL结构")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/网络基础/URL结构.png")}}),a._v(" "),t("h2",{attrs:{id:"_3、常见头部"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、常见头部"}},[a._v("#")]),a._v(" 3、常见头部")]),a._v(" "),t("h3",{attrs:{id:"常见请求头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见请求头"}},[a._v("#")]),a._v(" 常见请求头")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/网络基础/请求头.webp")}}),a._v("\n### 常见响应头\n"),t("img",{attrs:{src:a.$withBase("/网络基础/响应头.webp")}}),a._v("\n## 4、HTTP状态码\n- 1xx: 表示目前是协议处理的中间状态，还需要后续操作。\n- 2xx: 表示成功状态。\n- 3xx: 重定向状态，资源位置发生变动，需要重新请求。\n- 4xx: 请求报文有误。\n- 5xx: 服务器端发生错误。\n"),t("details",[t("summary"),a._v(" "),t("img",{attrs:{src:a.$withBase("/网络基础/状态码.jpg")}})]),a._v(" "),t("h3",{attrs:{id:"_1xx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1xx"}},[a._v("#")]),a._v(" 1xx")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//继续  请求者应当继续提出请求。服务器返回此代码表示已收到请求的第一部分，正在等待其余部分。")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("101")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//切换协议  请求者已要求服务器切换协议，服务器已确认并准备切换。")]),a._v("\n")])])]),t("h3",{attrs:{id:"_2xx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2xx"}},[a._v("#")]),a._v(" 2xx")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//成功  服务器已经成功处理了请求。")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("204")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//无内容  服务器成功处理了请求，但没有返回任何内容（响应报文中无body）")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("206")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//部分内容  服务器成功处理了部分GET请求")]),a._v("\n")])])]),t("h3",{attrs:{id:"_3xx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3xx"}},[a._v("#")]),a._v(" 3xx")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("301")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//永久重定向 请求的网页已永久移动到新位置。浏览器跳转到新地址并做缓存优化，未来访问时自动访问重定向后的地址。")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("302")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//临时重定向  浏览器并不会做缓存优化。")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("304")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//未修改  自动上次请求后，请求的网页未修改过。服务器返回此响应，不会返回网页的内容。（协商缓存命中时）")]),a._v("\n")])])]),t("h3",{attrs:{id:"_4xx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4xx"}},[a._v("#")]),a._v(" 4xx")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("400")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//错误请求  服务器不理解请求的语法")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("401")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//未授权  请求要求身份验证。对于需要登录的网页，服务器可能返回此响应")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("403")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//禁止  服务器禁止访问")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("404")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//未找到  服务器找不到请求的资源")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("405")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//方法禁用  禁用请求中指定的方法")]),a._v("\n")])])]),t("h3",{attrs:{id:"_5xx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5xx"}},[a._v("#")]),a._v(" 5xx")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("500")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//服务器内部错误  服务器遇到错误，无法完成请求")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("501")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//尚未实施  服务器不具备完成请求的功能。例如服务器无法识别请求方法")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("502")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//错误网关  服务器作为网关或代理，从上游服务器无法收到无效响应（服务器自身正常但访问时出错）")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("503")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//服务器不可用  服务器目前无法使用（由于超载或者停机维护）。通常，这只是暂时状态")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("504")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//网关超时  服务器作为网关代理，但是没有及时从上游服务器收到请求")]),a._v("\n")])])]),t("h2",{attrs:{id:"_5、http版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、http版本"}},[a._v("#")]),a._v(" 5、HTTP版本")]),a._v(" "),t("ul",[t("li",[a._v("http1.0 :客户端的每次请求都要求建立一次单独的连接")]),a._v(" "),t("li",[a._v("http1.1 :默认支持长连接，即一个TCP连接上可以传送多个HTTP请求和响应。引入了更多缓存控制策略 cache-control、etag。断点续传206")]),a._v(" "),t("li",[a._v("http2.0 :")])]),a._v(" "),t("blockquote",[t("ul",[t("li",[a._v("支持多路复用，同一个连接并发处理多个请求，避免了”http的队头堵塞”；")]),a._v(" "),t("li",[a._v("头部数据做了压缩，第二次只发送差异数据；")]),a._v(" "),t("li",[a._v("Server Push,在响应一个页面请求中，就可以随同页面的其它资源而非建立多个请求")]),a._v(" "),t("li",[a._v("二进制分帧，采用二进制格式传输数据，文本格式，解析起来更高效，不同消息的帧可以乱序发送后根据标识在组装起来")])])]),a._v(" "),t("ul",[t("li",[a._v("http3.0 : 持久连接还是多路复用，都会受到 TCP 队头阻塞的影响(tcp尝试重传的时候后续数据遭到阻塞)。启用tcp采取了基于udp的quic协议。实现了类似tcp的数据包重传、拥塞控制等一些功能保证可靠性")])])])}),[],!1,null,null,null);t.default=e.exports}}]);