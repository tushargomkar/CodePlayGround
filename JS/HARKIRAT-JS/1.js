function checkAnagramWithSort(str1, str2) {
    let newStr1 = str1.toLowerCase().replace(/[^a-z]/g, '')
    let newStr2 = str2.toLowerCase().replace(/[^a-z]/g, '')

    if (newStr1.length !== newStr2.length) {
      return false
    }

    let hash1 = {}
    let hash2 = {}

    newStr1.split('').map(letter => {
      hash1[letter] ? hash1[letter]++ : hash1[letter] = 1
    })

    newStr2.split('').map(letter => {
      hash2[letter] ? hash2[letter]++ : hash2[letter] = 1
    })

    let hash1keys = Object.keys(hash1)
    let hash2keys = Object.keys(hash2)

    for (let i = 0; i<hash1keys.length; i++) {
      if (!hash2keys.includes(hash1keys[i])) {
        return false
      }
      if (hash1[hash1keys[i]] !== hash2[hash1keys[i]]) {
        return false
      }
    }

    return true
  }
