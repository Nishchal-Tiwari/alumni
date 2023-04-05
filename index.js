const express = require('express')
const app = express();
const data = require('./main');
const sqlite3 = require('sqlite3').verbose();
app.set('')
const map1 = new Map();
const set1 = new Set();
const name_data = {};
global.db = new sqlite3.Database('./database.db', function (err) {
  if (err) {
    console.error(err);
    process.exit(1); //Bail out we can't connect to the DB
  } else {
    console.log("Database connected");
    global.db.run("PRAGMA foreign_keys=ON"); //This tells SQLite to pay attention to foreign key constraints
  }
});


data.forEach(d => {
  if (map1.get(d.company))
    map1.set(d.company, parseInt(map1.get(d.company)) + 1)
  else {
    map1.set(d.company, 1)
  }

  set1.add(d.name)
  name_data[d.name] = d.img.replace('https://glauniversity.in:8103/', '').replace('.jpg', '');

})

const name = Array.from(set1);

arr = []
for (let [i, j] of map1) {
  arr.push(i)
}


var d1 = Object.fromEntries(map1)

app.get('/user/:name', (req, res) => {

  const q = "SELECT * FROM data WHERE image=? ";
  img = 'https://glauniversity.in:8103/' + req.params.name + '.jpg'
  db.all(q, [img],async (err, data) => {
    if (err) return res.status(500).send(err + "  ok");

    const studata = await getData1(req.params.name)
    console.log(data)
    return res.render('studetail', { data: data, studata: studata });
  })
})

app.get('/:name', (req, res) => {
  const q = "SELECT * FROM data WHERE company=? ";

  console.log(req.params.name)
  db.all(q, [req.params.name], (err, data) => {
    if (err) return res.status(500).send(err + "  ok");
    console.log(data)
    return res.send(data);
  })
})
app.set('view engine', 'ejs');
app.get('/', (req, res) => {


  // console.log(response)
  res.render('data', { data: arr, names: name, name_data: name_data })

})









app.listen(3000, () => {
  console.log('started')
})




const getData1 = async (rollno) => {

  let res = await fetch('https://glauniversity.in/connectapp.asmx/StudentProfile',
    {
      'method': 'post',
      'body': `rollno=${rollno}&servicekey=thisismycommunicationapp&servicetype=SOFT`,
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  res = await res.text();
  return validate(res)
}
const validate = (res) => {

  res = res.replaceAll('</string>\r\n', '')
  res = res.split('<string>')
  res = res.slice(1, res.length)
  res[res.length - 1] = res[res.length - 1].replace('</ArrayOfString>', '')
  const data = {
    'regNo': res[0],
    'rollNo': res[1],
    'name': res[2],
    'fatherName': res[3],
    'semester': res[4],
    'course': res[5],
    'hostelStatus': res[6],
    'result': res[7],
    'section': res[8],
    'adress': res[9],
    'phoneNo': res[10],
    'phoneNoFather': res[11],
    'mail': res[12],
    'registrationStatus': res[13],
    'adress1': res[14],
    'mothersName': res[15],
    'Guardianname': res[16],
    'realtion': res[17],
    'phoneNoGuardian': res[18],
    '?': res[19],
    'dob': res[20],
    'gender': res[21],
    'bloodGroup': res[22],
    'belongsTo': res[23],
  }

  return data
}