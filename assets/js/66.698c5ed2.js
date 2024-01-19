(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{347:function(t,a,_){"use strict";_.r(a);var s=_(14),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),a("p",[t._v("在 HTTP 协议中有可能存在信息窃听或身份伪装等安全问题。使用 HTTPS 通信机制可以有效地防止这些问题。使用 HTTP 通信存在以下安全隐患。")]),t._v(" "),a("ul",[a("li",[t._v("通信使用明文（不加密），内容可能会被窃听")]),t._v(" "),a("li",[t._v("不验证通信方的身份，因此有可能遭遇伪装")]),t._v(" "),a("li",[t._v("无法证明报文的完整性，所以有可能已遭篡改")])]),t._v(" "),a("p",[t._v("TLS/SSL全称安全传输层协议Transport Layer Security, 是介于TCP和HTTP之间的一层安全协议。HTTPS 是在 HTTP 上建立 TLS/SSL 加密层，并对传输数据进行加密")]),t._v(" "),a("h2",{attrs:{id:"_1、加密机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、加密机制"}},[t._v("#")]),t._v(" 1、加密机制")]),t._v(" "),a("h3",{attrs:{id:"对称加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对称加密"}},[t._v("#")]),t._v(" 对称加密")]),t._v(" "),a("p",[t._v("加密方法中加密算法是公开的，而密钥却是保密的。通过这种方式得以保持加密方法的安全性。\n加密和解密都会用到密钥。没有密钥就无法对密码解密，反过来说，任何人只要持有密钥就能解密了。如果密钥被攻击者获得，那加密也就失去了意义")]),t._v(" "),a("h3",{attrs:{id:"非对称加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[t._v("#")]),t._v(" 非对称加密")]),t._v(" "),a("p",[t._v("使用公开密钥加密方式，发送密文的一方使用对方的公开密钥进行加密处理，对方收到被加密的信息后，再使用自己的私有密钥进行解密。利用这种方式，不需要发送用来解密的私有密钥，也不必担心密钥被攻击者窃听而盗走")]),t._v(" "),a("h3",{attrs:{id:"https-采用混合加密机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-采用混合加密机制"}},[t._v("#")]),t._v(" HTTPS 采用混合加密机制")]),t._v(" "),a("p",[t._v("HTTPS 采用非对称密钥加密 + 对称密钥加密两者并用的混合加密机制。由于非对称密钥加密与对称密钥加密加密相比，其处理速度要慢。所以应充分利用两者各自的优势，将多种方法组合起来用于通信。")]),t._v(" "),a("p",[t._v("在交换密钥环节使用非对称密钥加密方式，之后的建立通信交换报文阶段则使用对称密钥加密方式。")]),t._v(" "),a("h2",{attrs:{id:"_2、证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、证书"}},[t._v("#")]),t._v(" 2、证书")]),t._v(" "),a("p",[t._v("与服务器建立加密通信时，密钥传输途中有可能已被中间人截获并替换。为确保收到的密钥就是原本服务器发行的公开密钥，可以使用由数字证书认证机构（CA，Certificate Authority）和其相关机关颁发的公开密钥证书解决上问题。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/网络基础/数字证书1.webp")}}),t._v(" "),a("p",[t._v("浏览器拿到数字证书后会首先读取证书中的明文内容。CA 进行数字证书的签名时会保存一个 Hash 函数，来这个函数来计算明文内容得到信息A，然后用公钥解密明文内容得到信息B，两份信息做比对，一致则表示认证合法。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/网络基础/数字证书2.webp")}}),t._v(" "),a("h2",{attrs:{id:"_3、基本流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、基本流程"}},[t._v("#")]),t._v(" 3、基本流程")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/网络基础/证书.png")}}),t._v(" "),a("ol",[a("li",[t._v("客户端向服务端发起请求")]),t._v(" "),a("li",[t._v("服务端返回 CA 机构颁发的证书，内含服务端的公钥")]),t._v(" "),a("li",[t._v("客户端拿到服务端的公钥证书后使用认证机构的公开密钥（已事先植入到浏览器中）向认证机构验证公钥证书上的数字签名以确认服务器公钥的真实性")]),t._v(" "),a("li",[t._v("验证通过后，客户端使用对称加密方式生成密钥并通过使用服务器公钥对其加密后发送")]),t._v(" "),a("li",[t._v("服务器使用私钥对收到的报文解密，得到对称密钥")]),t._v(" "),a("li",[t._v("后续报文通过对称的加密方式进行通信")])]),t._v(" "),a("h2",{attrs:{id:"_4、中间人攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、中间人攻击"}},[t._v("#")]),t._v(" 4、中间人攻击")]),t._v(" "),a("p",[t._v("伪造证书和密钥")])])}),[],!1,null,null,null);a.default=v.exports}}]);