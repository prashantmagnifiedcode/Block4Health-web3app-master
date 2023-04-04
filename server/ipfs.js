// const fsPath = require("path");
// const { FilebaseClient } = require('@filebase/client')
// const { filesFromPath } = require('files-from-path')

// async function upload (api, options) {
//   console.log(`Parsing options...`);
//   const { path, pinName, verbose } = options;

//   let source = path;
//   if (!fsPath.isAbsolute(source)) {
//     const dir = process.cwd().toString();
//     source = fsPath.join(dir, source);
//   }

//   console.log(`Adding files...`);
//   const files = [];
//   for await (const file of filesFromPath(source, { pathPrefix: source })) {
//     files.push(file)
//     if (verbose) {
//       console.log(`Added File: ${JSON.stringify(file)}`);
//     }
//   }

//   console.log(`Storing files...`);
//   let tokenString = `${api.key}:${api.secret}:${api.bucket}`;
//   let cid = await FilebaseClient.storeDirectory(
//     { endpoint: 'https://s3.filebase.com', token: Buffer.from(tokenString).toString('base64') },
//     files,
//     pinName
//   );
//   console.log(`Stored files...`)
//   console.log(`CID: ${cid}`);
//   console.log(`Done`)

//   return {
//     cid: cid,
//     ipfs: cid,
//   };
// }

// (async function () {
//   try {
//     await upload({
//       key: "1B0AD38B4926DC2EAEC8",
//       secret: "35wlVolJf6aGgaUyQJeSeCh1mJQ7BoIpXAqkZHrm",
//       bucket: "b4h",
//     }, {
//       path: "./instagramicon.png",
//       pinName: "b4h"
//     });
//   } catch (err) {
//     console.error(err.message);
//   }
// })();