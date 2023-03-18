function matchArrays(v,r){
    result = 0;

    for (let i = 0; i <= r.length; i++) {

        if (r.indexOf(v[i]) > -1) {
          result++
        } else {
          result
        }

      }
    
    return result;
}

matchArrays(['incapsulation','OOP','array'],
['time', 'propert','paralelism', 'OOP', 'incapsulation', 'incapsulation', 'array']);