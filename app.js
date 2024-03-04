const fs = require('fs');
const path = require('path');


function getFiles(dirPath) {
  let files = fs.readdirSync(dirPath,{withFileTypes: true});
  let filelist = [];
  files.forEach(file => {
      let filePath = path.join(dirPath, file);
      let stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
          filelist = filelist.concat(getFiles(filePath)); // 디렉토리면 재귀적으로 탐색
      } else if (stats.isFile()) {
          filelist.push(filePath); // 파일이면 리스트에 추가
      }
  });
  return filelist;
}

// const files = getFiles('routes');
// console.log(files)

const anotherFiles = fs.readdirSync('./routes', { recursive: true })
console.log(anotherFiles.filter(e => e.endsWith('.js')))