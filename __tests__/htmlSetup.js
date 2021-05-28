// const htmlSetup = (() => {
//   const fs = require('fs');
//   const path = require('path');
//   const html = fs.readFileSync(path.resolve(__dirname, '.../docs/index.html'), 'utf8');
  
//   jest.dontMock('fs');
  
//   const setHtml = () => {
//     document.documentElement.innerHTML = html.toString();
//   };
//   const resetHtml = () => {
//     // restore the original func after test
//     jest.resetModules();
//   };
//   return { setHtml, resetHtml };
// })();

// export default htmlSetup;