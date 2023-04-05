const data=require('./main');
var m1=new Map()
var m2=new Map()

data.map(d=>{
    if(!m1.get(d.year))
        m1.set(d.year,1);
    else
        m1.set(d.year,m1.get(d.year)+1)
    if(!m2.get(d.branch))
        m2.set(d.branch,1);
    else
        m2.set(d.branch,m2.get(d.branch)+1)
    if(d.branch.includes('B.Tech')){
    if(!m2.get('B.Tech'))
        m2.set('B.Tech',1);
    else
        m2.set('B.Tech',m2.get('B.Tech')+1)

    }
})
console.log(m1)
console.log(m2)