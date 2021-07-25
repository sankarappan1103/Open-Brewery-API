function foo(data) {

let container=document.createElement("div");
container.setAttribute("class","container");

let row=document.createElement("div");
row.setAttribute("class","row");

//let row=document.getElementById("row");
data.forEach(element => {
    if(element.phone == null)
    {
        element.phone="Not available";
    }
    if(element.website_url == null)
    {
        element.website_url="Not available";
    }
    let col=document.createElement("div");
    col.setAttribute("class","col-6 mb-3");
    
    let card =document.createElement("row");
    card.setAttribute("class","card text-white bg-primary mb-3");
    
    let cardBody=document.createElement("div");
    cardBody.setAttribute("class","card-body");

    let content=document.createElement("row");
    content.setAttribute("class","content");

    let name1=document.createElement("dd");
    name1.setAttribute("id","name1");
     name1.setAttribute("class","name1 col-sm-9");
    name1.innerHTML=element.name;

    let name=document.createElement("dt");
    name.setAttribute("class","name");
    name.innerHTML="NAME :"+name1.innerHTML;

    let id1=document.createElement("dd");
    id1.setAttribute("id","id1");
     id1.setAttribute("class","id1");
    id1.innerHTML=element.brewery_type;

    let id=document.createElement("dt");
    id.setAttribute("class","id");
    id.innerHTML="ID:"+id1.innerHTML;
    //cardTitle.innerHTML=element.brewery_type;
    
    let cardText=document.createElement("p");
    cardText.setAttribute("class","card-text");
    cardText.innerHTML="data to be displayed";
    
    let Address=document.createElement("dt");
    Address.setAttribute("class","Address:");
    Address.innerHTML="Address :";
    
    let Address1=document.createElement("dd");
    Address1.setAttribute("class","Address1 col-sm-3");
    Address1.innerHTML=element.state+'<br>'+element.postal_code+'<br>'+element.country; 

    let phone=document.createElement("dt");
    phone.setAttribute("class","phone");
    phone.innerHTML="phone: "+element.phone;

    let web=document.createElement("dt");
    web.setAttribute("class","web");
    web.innerHTML="website: "+element.website_url;
    
    content.append(name,id,Address,Address1,phone,web);
    cardBody.append(content);
    //cardBody.append(name,name1,id,Address,Address1,phone,web);
    card.append(cardBody);
    col.append(card);
    row.append(col);  
});

container.append(row);
document.body.append(container);
}

async function getjson()
{
   try{

       let resp=await fetch("https://api.openbrewerydb.org/breweries");
       let data=await resp.json();
       foo(data);
   }
   catch(error){
        console.log(error);
   }
}
getjson();
