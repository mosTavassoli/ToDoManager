var html,newhtml;

const content  =[ 
    {
        description : "Go to the University",
        badge : "Personal",
        Date : "Fr 27 March 2020"
    },
    {
        description : "Go to",
        badge : "private",
        Date : "Fr 27 March 2020"
    },
    {
        description : "Go to gloceries",
        badge : "public",
        Date : "Fr 27 March 2020"
    },
    {
        description : "University",
        badge : "Personal",
        Date : "Fr 18 jun 2020"
    }
]

html = `<li class="list-group-item"><div class="form-check d-flex justify-content-between align-items-center"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">%description%</label><span class="ml-1 mr-auto badge badge-warning ">%badge%</span><small class="ml-1">%Date%</small></div></li>`

var generateDOM = (description,badge,Date)=>{
    newhtml = html.replace('%description%',description);
    newhtml = newhtml.replace('%badge%',badge);
    newhtml = newhtml.replace('%Date%',Date);
    return newhtml;
}

for (items of content){
    var DOM = generateDOM(items.description,items.badge,items.Date);
    document.getElementById('list-item').insertAdjacentHTML('beforeend' , DOM);
}
