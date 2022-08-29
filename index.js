
let pdfBtn = document.getElementById('pdf-btn')
let pdfModal = document.getElementById('pdf-modal')
let pdfModalCloseBtn = document.getElementById('pdf-modal-close')


pdfBtn.onclick = function () {
  pdfModal.classList.add('open')
}

pdfModalCloseBtn.onclick = () => {
  pdfModal.classList.remove('open')
  pdfModal.style.animation = 'close 0.3s forwards'
}

// pdfModalDownloadBtn.onclick = () => {
//   DownloadFile(
//     './assets/pdf/BLM_HealingAction_r1.pdf',
//     'BLM_HealingAction_r1.pdf'
//   )
// }

// function DownloadFile(url, fileName) {
//   //Set the File URL.
//   var url = url + fileName

//   //Create XMLHTTP Request.
//   var req = new XMLHttpRequest()
//   req.open('GET', url, true)
//   req.responseType = 'blob'
//   req.onload = function () {
//     //Convert the Byte Data to BLOB object.
//     var blob = new Blob([req.response], { type: 'application/octetstream' })

//     //Check the Browser type and download the File.
//     var isIE = false || !!document.documentMode
//     if (isIE) {
//       window.navigator.msSaveBlob(blob, fileName)
//     } else {
//       var url = window.URL || window.webkitURL
//       link = url.createObjectURL(blob)
//       var a = document.createElement('a')
//       a.setAttribute('download', fileName)
//       a.setAttribute('href', link)
//       document.body.appendChild(a)
//       a.click()
//       document.body.removeChild(a)
//     }
//   }
//   req.send()
// }



