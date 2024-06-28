"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[3323],{264:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>j,contentTitle:()=>h,default:()=>m,frontMatter:()=>u,metadata:()=>x,toc:()=>p});var s=l(5893),r=l(1151),i=l(4866),c=l(5162),t=l(9286),a=l(4996),d=l(7294);const o=e=>{let{filePath:n,language:l="javascript",title:r=""}=e;const[i,c]=(0,d.useState)(""),o=(0,a.ZP)(n);return(0,d.useEffect)((()=>{fetch(o).then((e=>e.text())).then((e=>{c(e)}))}),[n]),(0,s.jsx)(t.Z,{language:l,title:r,children:i})},u={},h="File System \u6a21\u5757",x={id:"core-modules/file-system",title:"File System \u6a21\u5757",description:"File System\uff08\u6587\u4ef6\u7cfb\u7edf\uff09\u6a21\u5757\uff08\u901a\u5e38\u7b80\u79f0\u4e3a fs \u6a21\u5757\uff09\u662f Node.js \u4e2d\u7684\u4e00\u4e2a\u6838\u5fc3\u6a21\u5757\uff0c\u7528\u4e8e\u5904\u7406\u8ba1\u7b97\u673a\u6587\u4ef6\u7cfb\u7edf\u7684\u5404\u79cd\u64cd\u4f5c\u3002\u5b83\u5141\u8bb8\u4f60\u5728 Node.js \u73af\u5883\u4e2d\u8fdb\u884c\u6587\u4ef6\u7684\u8bfb\u53d6\u3001\u5199\u5165\u3001\u66f4\u6539\u3001\u5220\u9664\u7b49\u64cd\u4f5c\uff0c\u4ee5\u53ca\u4e0e\u6587\u4ef6\u548c\u76ee\u5f55\u8fdb\u884c\u4ea4\u4e92\u3002",source:"@site/docs/core-modules/file-system.mdx",sourceDirName:"core-modules",slug:"/core-modules/file-system",permalink:"/nodejs-docs/core-modules/file-system",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/nodejs-docs/tree/main/docs/core-modules/file-system.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u6838\u5fc3\u6a21\u5757",permalink:"/nodejs-docs/category/\u6838\u5fc3\u6a21\u5757"},next:{title:"Path \u6a21\u5757",permalink:"/nodejs-docs/core-modules/path"}},j={},p=[{value:"\u6587\u4ef6\u64cd\u4f5c",id:"\u6587\u4ef6\u64cd\u4f5c",level:2},{value:"\u8bfb\u53d6\u6587\u4ef6",id:"\u8bfb\u53d6\u6587\u4ef6",level:3},{value:"\u5199\u5165\u6587\u4ef6",id:"\u5199\u5165\u6587\u4ef6",level:3},{value:"\u8ffd\u52a0\u6587\u4ef6",id:"\u8ffd\u52a0\u6587\u4ef6",level:3},{value:"\u5220\u9664\u6587\u4ef6",id:"\u5220\u9664\u6587\u4ef6",level:3},{value:"\u6587\u4ef6\u4fe1\u606f",id:"\u6587\u4ef6\u4fe1\u606f",level:2},{value:"\u83b7\u53d6\u6587\u4ef6\u72b6\u6001\u4fe1\u606f",id:"\u83b7\u53d6\u6587\u4ef6\u72b6\u6001\u4fe1\u606f",level:3},{value:"\u68c0\u67e5\u6587\u4ef6\u8bbf\u95ee\u6743\u9650",id:"\u68c0\u67e5\u6587\u4ef6\u8bbf\u95ee\u6743\u9650",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u6587\u4ef6\u63cf\u8ff0\u7b26",id:"\u6587\u4ef6\u63cf\u8ff0\u7b26",level:3}];function f(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"file-system-\u6a21\u5757",children:"File System \u6a21\u5757"}),"\n",(0,s.jsx)(n.p,{children:"File System\uff08\u6587\u4ef6\u7cfb\u7edf\uff09\u6a21\u5757\uff08\u901a\u5e38\u7b80\u79f0\u4e3a fs \u6a21\u5757\uff09\u662f Node.js \u4e2d\u7684\u4e00\u4e2a\u6838\u5fc3\u6a21\u5757\uff0c\u7528\u4e8e\u5904\u7406\u8ba1\u7b97\u673a\u6587\u4ef6\u7cfb\u7edf\u7684\u5404\u79cd\u64cd\u4f5c\u3002\u5b83\u5141\u8bb8\u4f60\u5728 Node.js \u73af\u5883\u4e2d\u8fdb\u884c\u6587\u4ef6\u7684\u8bfb\u53d6\u3001\u5199\u5165\u3001\u66f4\u6539\u3001\u5220\u9664\u7b49\u64cd\u4f5c\uff0c\u4ee5\u53ca\u4e0e\u6587\u4ef6\u548c\u76ee\u5f55\u8fdb\u884c\u4ea4\u4e92\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6240\u6709\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c\u90fd\u5177\u6709\u540c\u6b65\u3001\u5f02\u6b65\u56de\u8c03\u548c\u57fa\u4e8e Promise \u7684\u5f62\u5f0f\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528 CommonJS \u8bed\u6cd5\u548c ES6 \u6a21\u5757 (ESM) \u8fdb\u884c\u8bbf\u95ee\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u9700\u8981\u6700\u5927\u6027\u80fd\uff08\u5728\u6267\u884c\u65f6\u95f4\u548c\u5185\u5b58\u5206\u914d\u65b9\u9762\uff09\u65f6\uff0c ",(0,s.jsx)(n.code,{children:"fs"})," \u6a21\u5757 API \u7684\u5f02\u6b65\u6bd4\u4f7f\u7528 Promise API \u66f4\u53ef\u53d6\u3002"]}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(c.Z,{value:"\u5f02\u6b65\u793a\u4f8b",children:[(0,s.jsx)(n.p,{children:"\u5f02\u6b65\u56de\u8c03\u5f62\u5f0f\u5c06\u5b8c\u6210\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u5176\u6700\u540e\u4e00\u4e2a\u53c2\u6570\uff0c\u5e76\u5f02\u6b65\u8c03\u7528\u8be5\u64cd\u4f5c\u3002\u4f20\u9012\u7ed9\u5b8c\u6210\u56de\u8c03\u7684\u53c2\u6570\u53d6\u51b3\u4e8e\u65b9\u6cd5\uff0c\u4f46\u7b2c\u4e00\u4e2a\u53c2\u6570\u59cb\u7ec8\u4fdd\u7559\u7528\u4e8e\u5f02\u5e38\u3002\u5982\u679c\u64cd\u4f5c\u6210\u529f\u5b8c\u6210\uff0c\u5219\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f null \u6216 undefined \u3002"}),(0,s.jsx)(o,{filePath:"/codeSource/fs/unlink.txt"})]}),(0,s.jsxs)(c.Z,{value:"\u540c\u6b65\u793a\u4f8b",children:[(0,s.jsxs)(n.p,{children:["\u540c\u6b65 API \u4f1a\u963b\u6b62 Node.js \u4e8b\u4ef6\u5faa\u73af\u548c\u8fdb\u4e00\u6b65\u7684 JavaScript \u6267\u884c\uff0c\u76f4\u5230\u64cd\u4f5c\u5b8c\u6210\u3002\u5f02\u5e38\u4f1a\u7acb\u5373\u629b\u51fa\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"try/catch"})," \u8fdb\u884c\u5904\u7406\uff0c\u6216\u8005\u53ef\u4ee5\u5141\u8bb8\u5192\u6ce1\u3002"]}),(0,s.jsx)(o,{filePath:"/codeSource/fs/unlinkSync.txt"})]}),(0,s.jsxs)(c.Z,{value:"Promise \u793a\u4f8b",children:[(0,s.jsx)(n.p,{children:"\u57fa\u4e8e Promise \u7684\u64cd\u4f5c\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u8be5 Promise \u5728\u5f02\u6b65\u64cd\u4f5c\u5b8c\u6210\u65f6\u4f1a\u5f97\u5230\u6ee1\u8db3\u3002"}),(0,s.jsx)(o,{filePath:"/codeSource/fs/promises.unlink.txt"})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6587\u4ef6\u64cd\u4f5c",children:"\u6587\u4ef6\u64cd\u4f5c"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u5217\u5bf9\u6587\u4ef6\u64cd\u4f5c\u5747\u4ee5 ",(0,s.jsx)(n.code,{children:"example.txt"})," \u793a\u4f8b\u3002"]}),"\n",(0,s.jsx)(o,{filePath:"/codeSource/fs/example.txt",language:"txt",title:"example.txt"}),"\n",(0,s.jsx)(n.h3,{id:"\u8bfb\u53d6\u6587\u4ef6",children:"\u8bfb\u53d6\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"fs.readFile"})," \u4e00\u7cfb\u5217\u51fd\u6570\u4ee5\u5f02\u6b65\u3001\u540c\u6b65\u548c\u57fa\u4e8e Promise \u7684\u5f62\u5f0f\u6765\u8bfb\u53d6\u6587\u4ef6\u7684\u5168\u90e8\u5185\u5bb9\u3002"]}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(c.Z,{value:"\u8bed\u6cd5",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"path"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8868\u793a\u8981\u8bfb\u53d6\u7684\u6587\u4ef6\u7684\u8def\u5f84\u6216",(0,s.jsx)(n.a,{href:"#%E6%96%87%E4%BB%B6%E6%8F%8F%E8%BF%B0%E7%AC%A6",children:"\u6587\u4ef6\u63cf\u8ff0\u7b26"}),"\u3002\u7c7b\u578b\uff1a",(0,s.jsx)(n.code,{children:"string"}),"\uff08\u6587\u4ef6\u8def\u5f84\uff09\uff0c",(0,s.jsx)(n.code,{children:"Buffer"}),"\uff0c",(0,s.jsx)(n.code,{children:"URL"}),"\uff0c\u6216 ",(0,s.jsx)(n.code,{children:"integer"}),"\uff08\u6587\u4ef6\u63cf\u8ff0\u7b26\uff09\u3002"]}),"\n"]}),(0,s.jsx)("p",{className:"optional",children:(0,s.jsx)(n.code,{children:"option"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5bf9\u8c61\u6216\u5b57\u7b26\u4e32\uff0c\u53ef\u9009\u53c2\u6570\uff0c\u6307\u5b9a\u6587\u4ef6\u8bfb\u53d6\u7684\u9009\u9879\u3002"}),"\n"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"encoding"})," \u6307\u5b9a\u7f16\u7801\u683c\u5f0f, \u8f93\u51fa\u5b57\u7b26\u4e32\u3002\u9ed8\u8ba4 ",(0,s.jsx)(n.code,{children:"null"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"flag"})," \u67e5\u770b\u6587\u4ef6\u7cfb\u7edf\u7684\u652f\u6301 flags\uff0c\u9ed8\u8ba4\u503c\uff1a ",(0,s.jsx)(n.code,{children:"r"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"signal"})," \u5141\u8bb8\u4e2d\u6b62\u6b63\u5728\u8fdb\u884c\u7684 readFile\u3002"]}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"callback"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6587\u4ef6\u5220\u9664\u64cd\u4f5c\u5b8c\u6210\u540e\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570\u3002\u5b83\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff1a",(0,s.jsx)(n.code,{children:"err"})," \u5bf9\u8c61\uff0c\u5982\u679c\u64cd\u4f5c\u6210\u529f\uff0c\u5219\u8be5\u5bf9\u8c61\u4e3a ",(0,s.jsx)(n.code,{children:"null"}),"\u3002",(0,s.jsx)(n.code,{children:"data"})," \u6587\u4ef6\u5185\u5bb9\uff0c\u4ee5\u5b57\u7b26\u4e32\u6216\u7f13\u51b2\u533a\u5f62\u5f0f\u8fd4\u56de\uff0c\u6839\u636e\u6307\u5b9a\u7684\u7f16\u7801\u683c\u5f0f\u3002"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="\u7528\u6cd5"',children:"fs.readFileSync(path,option);\nfs.readFile(path,option\uff0ccallback);\nfs.promises.readFile(path,option);\n"})})]}),(0,s.jsx)(c.Z,{value:"\u5f02\u6b65\u793a\u4f8b",children:(0,s.jsx)(o,{filePath:"/codeSource/fs/readFile.txt"})}),(0,s.jsx)(c.Z,{value:"\u540c\u6b65\u793a\u4f8b",children:(0,s.jsx)(o,{filePath:"/codeSource/fs/readFileSync.txt"})}),(0,s.jsx)(c.Z,{value:"Promise \u793a\u4f8b",children:(0,s.jsx)(o,{filePath:"/codeSource/fs/promises.readFile.txt"})})]}),"\n",(0,s.jsx)(n.h3,{id:"\u5199\u5165\u6587\u4ef6",children:"\u5199\u5165\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"writeFile"})," \u4e00\u7cfb\u5217\u51fd\u6570\u4ee5\u5f02\u6b65\u3001\u540c\u6b65\u548c\u57fa\u4e8e Promise \u7684\u5f62\u5f0f\u5c06\u6570\u636e\u5199\u5165\u6587\u4ef6\u3002\u5982\u679c\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u5b83\u5c06\u88ab\u521b\u5efa\u3002\u5982\u679c\u6587\u4ef6\u5b58\u5728\uff0c\u5219\u8fdb\u884c\u8986\u76d6\u5199\u5165\u3002\u82e5\u8def\u5f84\u5305\u542b\u6587\u4ef6\u5939\uff0c\u5fc5\u987b\u63d0\u524d\u521b\u5efa\u3002"]}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(c.Z,{value:"\u8bed\u6cd5",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"file"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8868\u793a\u6587\u4ef6\u540d\u6216",(0,s.jsx)(n.a,{href:"#%E6%96%87%E4%BB%B6%E6%8F%8F%E8%BF%B0%E7%AC%A6",children:"\u6587\u4ef6\u63cf\u8ff0\u7b26"}),"\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"data"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u8981\u5199\u5165\u6587\u4ef6\u7684\u6570\u636e\u3002\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u7f13\u51b2\u533a\u3002"}),"\n"]}),(0,s.jsx)("p",{className:"optional",children:(0,s.jsx)(n.code,{children:"options"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u53ef\u9009\u7684\u5bf9\u8c61\u6216\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u6307\u5b9a\u7f16\u7801\u3001\u6a21\u5f0f\u548c\u6807\u5fd7\u3002"}),"\n"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"encoding"})," \u7f16\u7801\u683c\u5f0f\uff0c\u9ed8\u8ba4 ",(0,s.jsx)(n.code,{children:"utf-8"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mode"})," integer \u9ed8\u8ba4\u503c\uff1a 0o666\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"flag"})," \u67e5\u770b\u6587\u4ef6\u7cfb\u7edf\u7684\u652f\u6301 flags \u3002\u9ed8\u8ba4\u503c\uff1a",(0,s.jsx)(n.code,{children:"w"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"signal"})," \u5141\u8bb8\u4e2d\u6b62\u6b63\u5728\u8fdb\u884c\u7684 writeFile"]}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"callback"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6587\u4ef6\u5220\u9664\u64cd\u4f5c\u5b8c\u6210\u540e\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570\u3002\u5b83\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff1aerr \u5bf9\u8c61\uff0c\u5982\u679c\u64cd\u4f5c\u6210\u529f\uff0c\u5219\u8be5\u5bf9\u8c61\u4e3a ",(0,s.jsx)(n.code,{children:"null"}),"\u3002"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="\u7528\u6cd5"',children:"fs.writeFileSync(file, data[, options])\nfs.writeFile(file, data[, options], callback)\nfs.promises.writeFile(file, data[, options])\n"})})]}),(0,s.jsx)(c.Z,{value:"\u5f02\u6b65\u793a\u4f8b",children:(0,s.jsx)(o,{filePath:"/codeSource/fs/writeFile.txt"})}),(0,s.jsx)(c.Z,{value:"\u540c\u6b65\u793a\u4f8b",children:(0,s.jsx)(o,{filePath:"/codeSource/fs/writeFileSync.txt"})}),(0,s.jsx)(c.Z,{value:"Promise \u793a\u4f8b",children:(0,s.jsx)(o,{filePath:"/codeSource/fs/promises.writeFile.txt"})})]}),"\n",(0,s.jsx)(n.h3,{id:"\u8ffd\u52a0\u6587\u4ef6",children:"\u8ffd\u52a0\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"appendFile"})," \u4e00\u7cfb\u5217\u51fd\u6570\u5c06\u4ee5\u5f02\u6b65\u3001\u540c\u6b65\u548c\u57fa\u4e8e Promise \u7684\u5f62\u5f0f\u5c06\u5185\u5bb9\u8ffd\u52a0\u5230\u6587\u4ef6\uff0c\u4e0d\u8986\u76d6\u6587\u4ef6\u5185\u5bb9\u3002\u5982\u679c\u6587\u4ef6\u5c1a\u4e0d\u5b58\u5728\u5219\u521b\u5efa\u8be5\u6587\u4ef6\u3002\u82e5\u8def\u5f84\u5305\u542b\u6587\u4ef6\u5939\uff0c\u5fc5\u987b\u63d0\u524d\u521b\u5efa\u3002"]}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(c.Z,{value:"\u8bed\u6cd5",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"file"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8868\u793a\u6587\u4ef6\u540d\u6216 ",(0,s.jsx)(n.a,{href:"#%E6%96%87%E4%BB%B6%E6%8F%8F%E8%BF%B0%E7%AC%A6",children:"\u6587\u4ef6\u63cf\u8ff0\u7b26"})," \u7684\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"data"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u8981\u8ffd\u52a0\u6587\u4ef6\u7684\u6570\u636e\u3002\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u7f13\u51b2\u533a\u3002"}),"\n"]}),(0,s.jsx)("p",{className:"optional",children:(0,s.jsx)(n.code,{children:"options"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u53ef\u9009\u7684\u5bf9\u8c61\u6216\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u6307\u5b9a\u7f16\u7801\u3001\u6a21\u5f0f\u548c\u6807\u5fd7\u3002"}),"\n"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"encoding"})," \u7f16\u7801\u683c\u5f0f\uff0c\u9ed8\u8ba4 ",(0,s.jsx)(n.code,{children:"utf-8"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mode"})," integer \u9ed8\u8ba4\u503c\uff1a 0o666\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"flag"})," \u67e5\u770b\u6587\u4ef6\u7cfb\u7edf\u7684\u652f\u6301 flags \u3002\u9ed8\u8ba4\u503c\uff1a",(0,s.jsx)(n.code,{children:"a"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"signal"})," \u5141\u8bb8\u4e2d\u6b62\u6b63\u5728\u8fdb\u884c\u7684 appendFile"]}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"callback"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6587\u4ef6\u5220\u9664\u64cd\u4f5c\u5b8c\u6210\u540e\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570\u3002\u5b83\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff1aerr \u5bf9\u8c61\uff0c\u5982\u679c\u64cd\u4f5c\u6210\u529f\uff0c\u5219\u8be5\u5bf9\u8c61\u4e3a ",(0,s.jsx)(n.code,{children:"null"}),"\u3002"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="\u7528\u6cd5"',children:"fs.appendFileSync(file, data[, options])\nfs.appendFile(file, data[, options], callback)\nfs.promises.appendFile(file, data[, options])\n"})})]}),(0,s.jsx)(c.Z,{value:"\u5f02\u6b65\u793a\u4f8b",children:(0,s.jsx)(o,{filePath:"/codeSource/fs/appendFile.txt"})}),(0,s.jsx)(c.Z,{value:"\u540c\u6b65\u793a\u4f8b",children:(0,s.jsx)(o,{filePath:"/codeSource/fs/appendFileSync.txt"})}),(0,s.jsx)(c.Z,{value:"Promise \u793a\u4f8b",children:(0,s.jsx)(o,{filePath:"/codeSource/fs/promises.appendFile.txt"})})]}),"\n",(0,s.jsx)(n.h3,{id:"\u5220\u9664\u6587\u4ef6",children:"\u5220\u9664\u6587\u4ef6"}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(c.Z,{value:"\u8bed\u6cd5",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"path"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u8868\u793a\u6587\u4ef6\u8def\u5f84\u7684\u5b57\u7b26\u4e32"}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"callback"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6587\u4ef6\u5220\u9664\u64cd\u4f5c\u5b8c\u6210\u540e\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570\u3002\u5b83\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff1aerr \u5bf9\u8c61\uff0c\u5982\u679c\u64cd\u4f5c\u6210\u529f\uff0c\u5219\u8be5\u5bf9\u8c61\u4e3a ",(0,s.jsx)(n.code,{children:"null"}),"\u3002"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="\u7528\u6cd5"',children:"fs.unlinkSync(path);\nfs.unlink(path,callback);\nfs.promises.unlink(path);\n"})})]}),(0,s.jsx)(c.Z,{value:"\u5f02\u6b65\u793a\u4f8b",children:(0,s.jsx)(o,{filePath:"/codeSource/fs/unlink.txt"})}),(0,s.jsx)(c.Z,{value:"\u540c\u6b65\u793a\u4f8b",children:(0,s.jsx)(o,{filePath:"/codeSource/fs/unlinkSync.txt"})}),(0,s.jsx)(c.Z,{value:"Promise \u793a\u4f8b",children:(0,s.jsx)(o,{filePath:"/codeSource/fs/promises.unlink.txt"})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6587\u4ef6\u4fe1\u606f",children:"\u6587\u4ef6\u4fe1\u606f"}),"\n",(0,s.jsx)(n.h3,{id:"\u83b7\u53d6\u6587\u4ef6\u72b6\u6001\u4fe1\u606f",children:"\u83b7\u53d6\u6587\u4ef6\u72b6\u6001\u4fe1\u606f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"fs.stat"})," \u4e00\u7cfb\u5217\u51fd\u6570\u662f Node.js \u4e2d\u7528\u4e8e\u83b7\u53d6\u6587\u4ef6\u6216\u76ee\u5f55\u4fe1\u606f\u7684\u51fd\u6570\u3002\u5b83\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6587\u4ef6\u4fe1\u606f\u7684 ",(0,s.jsx)(n.code,{children:"fs.Stats"})," \u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(c.Z,{value:"\u8bed\u6cd5"}),(0,s.jsx)(c.Z,{value:"\u5f02\u6b65\u793a\u4f8b"}),(0,s.jsx)(c.Z,{value:"\u540c\u6b65\u793a\u4f8b"}),(0,s.jsx)(c.Z,{value:"Promise \u793a\u4f8b"})]}),"\n",(0,s.jsx)(n.h3,{id:"\u68c0\u67e5\u6587\u4ef6\u8bbf\u95ee\u6743\u9650",children:"\u68c0\u67e5\u6587\u4ef6\u8bbf\u95ee\u6743\u9650"}),"\n",(0,s.jsx)(n.h2,{id:"\u5176\u4ed6",children:"\u5176\u4ed6"}),"\n",(0,s.jsx)(n.h3,{id:"\u6587\u4ef6\u63cf\u8ff0\u7b26",children:"\u6587\u4ef6\u63cf\u8ff0\u7b26"}),"\n",(0,s.jsx)(n.p,{children:"\u6587\u4ef6\u63cf\u8ff0\u7b26\u662f\u4e00\u4e2a\u7531\u64cd\u4f5c\u7cfb\u7edf\u5206\u914d\u7684\u6574\u6570\uff0c\u7528\u4e8e\u6807\u8bc6\u5df2\u7ecf\u6253\u5f00\u7684\u6587\u4ef6\u3002\u6bcf\u6b21\u6253\u5f00\u6587\u4ef6\u65f6\uff0c\u64cd\u4f5c\u7cfb\u7edf\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u552f\u4e00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002\u6587\u4ef6\u63cf\u8ff0\u7b26\u53ef\u4ee5\u7528\u6765\u8fdb\u884c\u6587\u4ef6\u8bfb\u5199\u64cd\u4f5c\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"fs.readFile"})," \u652f\u6301\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u5f53\u4f60\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u4f60\u53ef\u4ee5\u83b7\u53d6\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u7136\u540e\u4f7f\u7528\u8be5\u63cf\u8ff0\u7b26\u6765\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9\u3002\u8fd9\u901a\u5e38\u7528\u4e8e\u66f4\u4f4e\u7ea7\u522b\u7684\u6587\u4ef6\u64cd\u4f5c\uff0c\u5141\u8bb8\u66f4\u7075\u6d3b\u7684\u63a7\u5236\u6587\u4ef6\u7684\u8bfb\u53d6\u548c\u5199\u5165\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"import * as fs from 'node:fs';\n\n// \u9996\u5148\uff0c\u6253\u5f00\u6587\u4ef6\u5e76\u83b7\u53d6\u6587\u4ef6\u63cf\u8ff0\u7b26\nfs.open('example.txt', (err, fd) => {\n  if (err) {\n    return console.error('\u6253\u5f00\u6587\u4ef6\u65f6\u51fa\u9519\uff1a', err);\n  }\n\n  // \u4f7f\u7528\u6587\u4ef6\u63cf\u8ff0\u7b26\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9\n  fs.readFile(fd, 'utf8', (err, data) => {\n    if (err) {\n      return console.error('\u8bfb\u53d6\u6587\u4ef6\u65f6\u51fa\u9519\uff1a', err);\n    }\n    console.log('\u6587\u4ef6\u5185\u5bb9\uff1a', data);\n\n    // \u5173\u95ed\u6587\u4ef6\n    fs.close(fd, err => {\n      if (err) {\n        return console.error('\u5173\u95ed\u6587\u4ef6\u65f6\u51fa\u9519\uff1a', err);\n      }\n    });\n  });\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5b9e\u9645\u4e0a\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\u4f7f\u7528\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u53ea\u8981\u4f60\u786e\u4fdd\u5728\u4f7f\u7528\u5b83\u4e4b\u524d\u6587\u4ef6\u5df2\u7ecf\u88ab\u6b63\u786e\u6253\u5f00\u5e76\u4e14\u5728\u64cd\u4f5c\u5b8c\u6210\u540e\u6b63\u786e\u5173\u95ed\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import * as fs from 'node:fs';\n\nfs.open('example.txt', 'r', (err, fd) => {\n  if (err) {\n    return console.error('\u6253\u5f00\u6587\u4ef6\u65f6\u51fa\u9519\uff1a', err);\n  }\n\n  // \u5728\u51fd\u6570\u4e4b\u5916\u8c03\u7528\u8bfb\u53d6\u6587\u4ef6\u7684\u64cd\u4f5c\n  readFileByFd(fd);\n});\n\nfunction readFileByFd(fd) {\n  console.log('\u6587\u4ef6\u63cf\u8ff0\u7b26', fd);\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},5162:(e,n,l)=>{l.d(n,{Z:()=>c});l(7294);var s=l(6905);const r={tabItem:"tabItem_Ymn6"};var i=l(5893);function c(e){let{children:n,hidden:l,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,c),hidden:l,children:n})}},4866:(e,n,l)=>{l.d(n,{Z:()=>y});var s=l(7294),r=l(6905),i=l(2466),c=l(6550),t=l(469),a=l(1980),d=l(7392),o=l(812);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:s,default:r}}=e;return{value:n,label:l,attributes:s,default:r}}))}(l);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function x(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:l}=e;const r=(0,c.k6)(),i=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,a._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function p(e){const{defaultValue:n,queryString:l=!1,groupId:r}=e,i=h(e),[c,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=l.find((e=>e.default))??l[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[d,u]=j({queryString:l,groupId:r}),[p,f]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,o.Nk)(l);return[r,(0,s.useCallback)((e=>{l&&i.set(e)}),[l,i])]}({groupId:r}),m=(()=>{const e=d??p;return x({value:e,tabValues:i})?e:null})();(0,t.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=l(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=l(5893);function b(e){let{className:n,block:l,selectedValue:s,selectValue:c,tabValues:t}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),o=e=>{const n=e.currentTarget,l=a.indexOf(n),r=t[l].value;r!==s&&(d(n),c(r))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const l=a.indexOf(e.currentTarget)+1;n=a[l]??a[0];break}case"ArrowLeft":{const l=a.indexOf(e.currentTarget)-1;n=a[l]??a[a.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},n),children:t.map((e=>{let{value:n,label:l,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>a.push(e),onKeyDown:u,onClick:o,...i,className:(0,r.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":s===n}),children:l??n},n)}))})}function g(e){let{lazy:n,children:l,selectedValue:r}=e;const i=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=p(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(g,{...n,...e})]})}function y(e){const n=(0,f.Z)();return(0,v.jsx)(k,{...e,children:u(e.children)},String(n))}}}]);