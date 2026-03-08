Kamu sudah menulis fungsi mulOfArray. Ujilah dengan input [2, 0, 26, 28, -2], dengan output yang seharusnya adalah 1456. Jika kamu menemukan bahwa hasilnya berbeda, bisakah kamu memperbaikinya? Jika kamu menemukan bahwa hasilnya sama, bisakah kamu menjelaskan mengapa demikian?

Kode awalnya error karena
```javascript
if (arr[i] >= 0)
```
yang seharusnya adalah
```javascript
if (arr[i] > 0)
```

di kode sebelumnya membuat 0 juga ikut dikalikan yang membuat hasilnya jadi 0.

hasil sebelum diperbaiki
![sebelum diperbaiki](<img/sebelum diperbaiki.png>)
hasil setelah diperbaiki
![sesudah diperbaiki](<img/sesudah diperbaiki.png>)