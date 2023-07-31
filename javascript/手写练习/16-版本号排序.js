let arr = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '11.3.4.5'];
function sortVersion (list) {
  return list.sort((version1, version2) => {
      const arr1 = version1.split('.').map(e => e * 1)
      const arr2 = version2.split('.').map(e => e * 1)
      const length = Math.max(arr1.length, arr2.length)
      for (let i = 0; i < length; i ++) {
          if ((arr1[i] || 0) > (arr2[i] || 0)) return 1
          if ((arr1[i] || 0) < (arr2[i] || 0)) return -1
      }
      return 0
  })
}
console.log(sortVersion(arr));