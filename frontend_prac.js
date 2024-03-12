let sumChargeVolumese = 0;
let allTagTr = document.querySelectorAll('#tbl-conn-info tr[id^="tr_"] , #tbl-conn-info tr[name^="tr_"]');
let reGroup = {};
for(let i = 0; i < allTagTr.length; i++){
    let innerTagDiv = allTagTr[i].id ? allTagTr[i].id : allTagTr[i].getAttribute('name');
    
    if(!reGroup.hasOwnProperty(innerTagDiv)){
        reGroup[innerTagDiv] = [];
    }
    reGroup[innerTagDiv].push(allTagTr[i]);
}

for(key in reGroup){
    let values = [];
    const groupItems = reGroup[key]; 

    for (let j = 0; j < groupItems.length; j++) { 
        const e = groupItems[j]; 
        let tag = e.querySelector('td input'); 
        let tagValNum = Number(tag.value);
        if(!isNaN(tagValNum)) values.push(tagValNum); 
    }
    sumChargeVolumes += Math.max(...values)
}

sumChargeVolumes