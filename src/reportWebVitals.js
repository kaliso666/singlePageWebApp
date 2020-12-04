const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS((onPerfEntry) => {
        console.log(`cls:${onPerfEntry.value}`)
      })
      getFID((onPerfEntry) => {
        console.log(`fid:${onPerfEntry.value}`)
      })
      getFCP((onPerfEntry) => {
        console.log(`fcp:${onPerfEntry.value}`)
      })
      getLCP((onPerfEntry) => {
        console.log(`lcp:${onPerfEntry.value}`)
      })
      getTTFB((onPerfEntry) => {
        console.log(`ttfb:${onPerfEntry.value}`)
      })
    })
  }
}

export default reportWebVitals
