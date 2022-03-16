class Countries{
    constructor(id,name,population,gdp){
        this.id=id;
        this.name=name;
        this.population=population;
        this.gdp=gdp;
    }

}

const rus=new Countries('01','Russia','140-000-000','2-000-000-000');


const can=new Countries('02','Canada','30-000-000','2-100-000-000');




class Cities extends Countries{
    constructor(id,name,population,countryId,founded){
        super(id);
        this.id=id;
        this.name=name;
        this.population=population;
        this.countryId=countryId;
        this.founded=founded;
        
    }
}


const moscow=new Cities('11','Moscow','11-000-000','01','1147');
const saintP=new Cities('12','Saint Petersburg','6-000-000','01','1703');

const toronto=new Cities('21','Toronto','3-700-000','02','1793');
const montreal=new Cities('22','Montreal','1-900-000','02','1642');

let dataCites=[];
dataCites.push(moscow,saintP,toronto,montreal);
class Companies extends Cities{
    constructor(id,name,city_id ,revenue,labors){
        super();
        this.id=id;
        this.name=name;
        this.city_id=city_id;
        this.revenue=revenue;
        this.labors=labors;
    }
}

let dataCom=[];

const ieka=new Companies('001','Ikea','11','1-000-000','2033');

const cola=new Companies('002','Coca-cola','11','1-400-000','933');

const bmw=new Companies('011','BMW','12','12-000-000','633');

const toyota=new Companies('022','Toyota','12','13-400-000','1783');

const gmc=new Companies('101','GMC','21','10-320-000','1233');

const nvidea=new Companies('102','Nvidea','21','9-670-000','567');

const amd=new Companies('201','AMD','22','8-890-000','2512');

const google=new Companies('202','Google','22','90-924-000','395');

dataCom.push(ieka,cola,bmw,toyota,gmc,nvidea,amd,google);


let allCityID=[];
let laborsAmount=[];
let allCountrID=[];

let companiesAmount={
    'rus':0,
    'can':0,
}





for(let i=0;i<dataCom.length;i++){
   if(dataCom[i]['labors']>1000) {
    allCityID.push(dataCom[i]['city_id']);
   }
}


let comAmounRever=Object.keys(companiesAmount);

for(let i=0;i<dataCites.length;i++){
    if((dataCites[i]['id']==allCityID[i])&&(dataCites[i]['countryId']==01)) {
        companiesAmount['rus']++;
    }
    if((dataCites[i]['id']==allCityID[i])&&(dataCites[i]['countryId']==02)) {
        companiesAmount['can']++;
    }
}




let tableCounyry=document.querySelector('.countryONE');

let tableCounyrytwo=document.querySelector('.countryTWO');
tableCounyry.innerHTML=comAmounRever[0];
tableCounyrytwo.innerHTML=comAmounRever[1];


let tableAmount=document.querySelector('.amountONE');

let tableAmounttwo=document.querySelector('.amountTWO');
tableAmount.innerHTML=companiesAmount['rus'];
tableAmounttwo.innerHTML=companiesAmount['can'];





